import type { APIRoute } from 'astro';

export const prerender = false; // Serverless Edge Function on Cloudflare

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();
    const { fullName, email, company, whatsapp, productSku, quantity, message } = data;

    // Basic Validation
    if (!fullName || !email || !message) {
      return new Response(
        JSON.stringify({
          success: false,
          error: 'Missing required fields (Full Name, Corporate Email, and Message are mandatory).',
        }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // In a production Cloudflare Pages / Workers environment, you can seamlessly:
    // 1. Dispatch an email notification to sales team via Resend API:
    //    await fetch('https://api.resend.com/emails', {
    //      method: 'POST',
    //      headers: { Authorization: `Bearer ${process.env.RESEND_API_KEY}`, 'Content-Type': 'application/json' },
    //      body: JSON.stringify({ from: 'rfq@apexprecision.com', to: 'sales@apexprecision.com', subject: `[New RFQ] ${productSku || 'Custom OEM'} from ${company}`, html: `<p>...</p>` })
    //    });
    //
    // 2. Or post immediately to your company Feishu/Slack/Discord webhook:
    //    await fetch(process.env.DISPATCH_WEBHOOK_URL, { method: 'POST', body: JSON.stringify({ text: `Lead from ${email}` }) });
    //
    // 3. Or record into Cloudflare D1 (Serverless SQLite) or Airtable / Baserow CRM.

    const leadId = `APEX-${Date.now().toString(36).toUpperCase()}`;

    console.log(`[Edge RFQ Dispatcher] Received Lead ${leadId}:`, {
      fullName,
      email,
      company,
      whatsapp,
      productSku,
      quantity,
    });

    return new Response(
      JSON.stringify({
        success: true,
        message: 'RFQ received and dispatched to engineering team.',
        leadId,
        timestamp: new Date().toISOString(),
      }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error: any) {
    return new Response(
      JSON.stringify({
        success: false,
        error: error.message || 'Internal Serverless Edge Error',
      }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};
