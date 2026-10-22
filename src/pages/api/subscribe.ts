import type { APIRoute } from 'astro';

export const prerender = false; // Serverless Edge Function on Cloudflare

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

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

    // In a production setup, persist to Cloudflare D1 / KV, or forward to a
    // Klaviyo/Resend audience endpoint:
    //   await fetch('https://a.klaviyo.com/api/list-import/', { ... })
    //   await env.SUBSCRIBERS.put(`sub:${email}`, JSON.stringify(record), { expirationTtl: 60 * 60 * 24 * 730 });

    const subscriberId = `SUB-${Date.now().toString(36).toUpperCase()}`;

    console.log(`[Edge Subscribe] ${subscriberId}:`, {
      email: String(email).trim().toLowerCase(),
      name: name || null,
      source: source || 'unknown',
      storeUrl: storeUrl || null,
      meta: meta || null,
    });

    return new Response(
      JSON.stringify({
        success: true,
        message: 'Subscribed. Your report is on its way.',
        subscriberId,
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
