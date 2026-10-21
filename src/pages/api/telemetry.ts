import type { APIRoute } from 'astro';

export const prerender = false; // Runs dynamically on Cloudflare Workers edge

export const POST: APIRoute = async ({ request }) => {
  try {
    const payload = await request.json();
    const { event, properties, url, referrer, timestamp } = payload;

    // Edge-level event telemetry logging
    console.log(`[Edge Telemetry | ${event}]`, {
      event,
      url,
      referrer,
      properties,
      timestamp: timestamp || new Date().toISOString(),
      userAgent: request.headers.get('user-agent') || 'unknown',
      country: request.headers.get('cf-ipcountry') || 'XX',
      ray: request.headers.get('cf-ray') || 'unknown',
    });

    return new Response(
      JSON.stringify({
        success: true,
        tracked: event,
        serverTime: Date.now(),
      }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'Cache-Control': 'no-store, no-cache, must-revalidate',
        },
      }
    );
  } catch (err: any) {
    return new Response(
      JSON.stringify({
        success: false,
        error: err.message || 'Invalid telemetry payload',
      }),
      { status: 400, headers: { 'Content-Type': 'application/json' } }
    );
  }
};
