/**
 * Luxury High-Ticket DTC Welcome Email Template
 * English-only, mobile-first, dark-accented modern layout.
 */
export function generateWelcomeEmailHtml(name?: string): string {
  const greeting = name ? `Hi ${name},` : 'Hello,';
  
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Welcome to DTC Full-Funnel Architecture</title>
</head>
<body style="margin: 0; padding: 0; background-color: #0b0f19; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #f1f5f9; line-height: 1.6;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: #0b0f19; padding: 40px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" style="max-width: 600px; background-color: #111827; border: 1px solid #1f2937; border-radius: 16px; overflow: hidden; box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.5);">
          <!-- Header -->
          <tr>
            <td style="padding: 32px 36px; border-bottom: 1px solid #1f2937; background: linear-gradient(180deg, #1e293b 0%, #111827 100%);">
              <span style="display: inline-block; padding: 4px 10px; font-size: 11px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: #60a5fa; background-color: rgba(59, 130, 246, 0.15); border: 1px solid rgba(59, 130, 246, 0.3); border-radius: 9999px;">DTC Growth Systems</span>
              <h1 style="margin: 16px 0 0 0; font-size: 22px; font-weight: 800; color: #ffffff; letter-spacing: -0.02em;">Welcome to Full-Funnel DTC Engineering</h1>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding: 36px 36px 24px 36px;">
              <p style="font-size: 15px; color: #e2e8f0; margin-top: 0;">${greeting}</p>
              
              <p style="font-size: 15px; color: #cbd5e1; line-height: 1.7;">
                Thanks for subscribing to the <strong>DTC Growth & Conversion Architecture Dispatch</strong>. You’re joining a network of brand founders and operators focused on sustainable high-ticket conversion, sub-second web performance, and zero-ad-loss checkouts.
              </p>

              <!-- Core Pillars Card -->
              <div style="background-color: #0f172a; border: 1px solid #1e293b; border-radius: 12px; padding: 20px; margin: 28px 0;">
                <h3 style="margin: 0 0 14px 0; font-size: 14px; font-weight: 700; color: #93c5fd; text-transform: uppercase; letter-spacing: 0.05em;">What You Can Expect:</h3>
                <ul style="margin: 0; padding-left: 20px; color: #94a3b8; font-size: 14px; line-height: 1.8;">
                  <li><strong style="color: #f1f5f9;">Ad Traffic Defense:</strong> How to slash Meta/TikTok click-to-landing loss from 25%+ to under 8%.</li>
                  <li><strong style="color: #f1f5f9;">Sub-Second Storefronts:</strong> Migrating slow Shopify apps to lightweight, zero-JS Jamstack edges.</li>
                  <li><strong style="color: #f1f5f9;">High-Ticket Psychology:</strong> Converting $99+ luxury items with 6-shot cinematic direction and Hook-FAB-Ideal frameworks.</li>
                  <li><strong style="color: #f1f5f9;">Retention & Risk Defense:</strong> Klaviyo lifecycle automations and pre-emptive Stripe dispute shields.</li>
                </ul>
              </div>

              <!-- CTA Box -->
              <div style="text-align: center; margin: 32px 0 16px 0;">
                <a href="https://naif.is-a.dev/tools/click-loss-auditor" style="display: inline-block; background-color: #2563eb; color: #ffffff; font-weight: 600; font-size: 14px; text-decoration: none; padding: 14px 28px; border-radius: 10px; box-shadow: 0 4px 12px rgba(37, 99, 235, 0.4);">
                  Open the Ad Click-Loss Calculator →
                </a>
              </div>

              <p style="font-size: 13px; color: #64748b; text-align: center; margin-top: 16px;">
                Direct inquiries or brand audits: <a href="mailto:contact@naif.is-a.dev" style="color: #60a5fa; text-decoration: underline;">contact@naif.is-a.dev</a>
              </p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding: 24px 36px; background-color: #090d16; border-top: 1px solid #1f2937; text-align: center;">
              <p style="margin: 0; font-size: 12px; color: #64748b;">
                Naif | DTC eCommerce Operator & Full-Funnel Growth Architect<br>
                Published from the Cloudflare Edge • <a href="https://naif.is-a.dev" style="color: #94a3b8; text-decoration: none;">naif.is-a.dev</a>
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}
