import type { APIRoute } from 'astro';
import { generateWelcomeEmailHtml } from '../../lib/email-template';

export const prerender = false; // Serverless Edge Function on Cloudflare

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/**
 * Astro v6 removed `Astro.locals.runtime.env`. On Cloudflare the supported
 * way is the `cloudflare:workers` env import, but that module only exists
 * inside the Workers runtime — so it is loaded lazily and guarded.
 */
async function readEnv(): Promise<Record<string, string | undefined>> {
  const collected: Record<string, string | undefined> = {};

  try {
    const mod = await import('cloudflare:workers');
    const cfEnv = (mod as any)?.env;
    if (cfEnv) {
      for (const key of ['RESEND_API_KEY']) {
        if (cfEnv[key]) collected[key] = cfEnv[key];
      }
    }
  } catch {
    // Not running on the Workers runtime (e.g. a Pages Function) — fall through.
  }

  const procEnv = (globalThis as any)?.process?.env || {};
  if (!collected.RESEND_API_KEY && procEnv.RESEND_API_KEY) {
    collected.RESEND_API_KEY = procEnv.RESEND_API_KEY;
  }
  if (!collected.RESEND_API_KEY && (import.meta as any)?.env?.RESEND_API_KEY) {
    collected.RESEND_API_KEY = (import.meta as any).env.RESEND_API_KEY;
  }

  return collected;
}

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();
    const { email, name, source, storeUrl, meta } = data;

    if (!email || !EMAIL_RE.test(String(email).trim())) {
      return new Response(
        JSON.stringify({ success: false, error: 'Please provide a valid email address.' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const cleanEmail = String(email).trim().toLowerCase();
    const subscriberId = `SUB-${Date.now().toString(36).toUpperCase()}`;

    console.log(`[Edge Subscribe] ${subscriberId}:`, {
      email: cleanEmail,
      name: name || null,
      source: source || 'unknown',
      storeUrl: storeUrl || null,
      meta: meta || null,
    });

    const env = await readEnv();
    const resendApiKey = env.RESEND_API_KEY || '';

    let emailSent = false;
    let emailId = null;

    if (resendApiKey) {
      try {
        const emailHtml = generateWelcomeEmailHtml(name);
        
        const resendRes = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${resendApiKey}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            from: 'Naif | DTC Growth <onboarding@resend.dev>',
            to: [cleanEmail],
            subject: 'Welcome to DTC Growth Architecture & CRO Playbook 🚀',
            html: emailHtml,
          }),
        });

        const resendData: any = await resendRes.json();
        if (resendRes.ok) {
          emailSent = true;
          emailId = resendData.id;
          console.log(`[Resend Success] Welcome email sent to ${cleanEmail}, id: ${emailId}`);
        } else {
          console.warn(`[Resend Warning] Delivery response:`, resendData);
        }
      } catch (e: any) {
        console.error('[Resend Error]', e.message);
      }
    } else {
      console.warn('[Resend Warning] No RESEND_API_KEY detected in runtime environment.');
    }

    return new Response(
      JSON.stringify({
        success: true,
        message: 'Subscribed successfully. Check your inbox for the welcome dispatch!',
        subscriberId,
        emailSent,
        emailId,
        timestamp: new Date().toISOString(),
      }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error: any) {
    return new Response(
      JSON.stringify({ success: false, error: error.message || 'Internal Serverless Edge Error' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};
