import type { APIRoute } from 'astro';
import { generateWelcomeEmailHtml } from '../../lib/email-template';

export const prerender = false; // Serverless Edge Function on Cloudflare Pages

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export const POST: APIRoute = async ({ request, locals }) => {
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

    // Resolve Resend API Key from Cloudflare Env / Vite Env / process.env
    const env = (locals as any)?.runtime?.env || {};
    const procEnv = (globalThis as any)?.process?.env || {};
    const resendApiKey = env.RESEND_API_KEY ||
                         import.meta.env.RESEND_API_KEY ||
                         procEnv.RESEND_API_KEY ||
                         '';

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
