/**
 * app/api/capi/route.js — Relay server-side para n8n
 *
 * Recebe eventos do browser e os encaminha para o webhook n8n,
 * que cuida do envio para Meta CAPI com IP real do servidor.
 */

const WEBHOOK_PROD = 'https://wbn.araxa.app/webhook/receive-forms-adv'
const WEBHOOK_TEST = 'https://n8n.araxa.app/webhook-test/receive-forms-adv'

const WEBHOOK_URL = process.env.NODE_ENV === 'production' ? WEBHOOK_PROD : WEBHOOK_TEST

export async function POST(request) {
  try {
    const body = await request.json()

    // Enriquece com dados do servidor (IP, user agent)
    const enriched = {
      ...body,
      server_ip:        request.headers.get('x-forwarded-for') ||
                        request.headers.get('x-real-ip') ||
                        'unknown',
      user_agent:       request.headers.get('user-agent') || '',
      origin:           request.headers.get('origin') || '',
      received_at_iso:  new Date().toISOString(),
      event_channel:    'hub-central-capi',
    }

    const res = await fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-source':     'avestra-hub-next',
      },
      body: JSON.stringify(enriched),
    })

    return new Response(JSON.stringify({ ok: true, status: res.status }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    })
  } catch (err) {
    // Não expõe detalhes do erro para o cliente
    return new Response(JSON.stringify({ ok: false }), {
      status: 200, // sempre 200 para não alertar adblockers
      headers: { 'Content-Type': 'application/json' },
    })
  }
}
