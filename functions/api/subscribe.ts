/**
 * Pages Function — newsletter sign-up.
 *
 * The Astro build ships the site as static output (Pages project `naif-dtc`
 * serves `dist/client`), so `/api/subscribe` has no server to land on. This
 * Function restores it: same payload contract as the Astro endpoint, and the
 * same Resend welcome email.
 */
import { generateWelcomeEmailHtml } from '../../src/lib/email-template';

interface PagesContext {
  request: Request;
  env: Record<string, string | undefined>;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function json(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
  });
}

export const onRequestPost = async (context: PagesContext) => {
  try {
    const data = await context.request.json();
    const { email, name, source, storeUrl, meta } = data ?? {};

    if (!email || !EMAIL_RE.test(String(email).trim())) {
      return json({ success: false, error: 'Please provide a valid email address.' }, 400);
    }

    const cleanEmail = String(email).trim().toLowerCase();
    const subscriberId = `SUB-${Date.now().toString(36).toUpperCase()}`;

    console.log(`[Edge Subscribe] ${subscriberId}:`, {
      email: cleanEmail,
      name: name ?? null,
      source: source ?? 'unknown',
      storeUrl: storeUrl ?? null,
      meta: meta ?? null,
    });

    const resendApiKey = context.env?.RESEND_API_KEY ?? '';
    let emailSent = false;
    let emailId: string | null = null;

    if (resendApiKey) {
      try {
        const resendRes = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${resendApiKey}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            from: 'Naif | DTC Growth <onboarding@resend.dev>',
            to: [cleanEmail],
            subject: 'Welcome to DTC Growth Architecture & CRO Playbook 🚀',
            html: generateWelcomeEmailHtml(name),
          }),
        });

        const resendData = (await resendRes.json()) as { id?: string };
        if (resendRes.ok) {
          emailSent = true;
          emailId = resendData.id ?? null;
          console.log(`[Resend Success] Welcome email sent to ${cleanEmail}, id: ${emailId}`);
        } else {
          console.warn('[Resend Warning] Delivery response:', resendData);
        }
      } catch (e) {
        console.error('[Resend Error]', (e as Error)?.message);
      }
    } else {
      console.warn('[Resend Warning] No RESEND_API_KEY detected in runtime environment.');
    }

    return json({
      success: true,
      message: 'Subscribed successfully. Check your inbox for the welcome dispatch!',
      subscriberId,
      emailSent,
      emailId,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    return json(
      { success: false, error: (error as Error)?.message || 'Internal Serverless Edge Error' },
      500
    );
  }
};

export const onRequestOptions = async () =>
  new Response(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
