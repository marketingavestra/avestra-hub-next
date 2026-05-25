/**
 * lib/metaEvents.js — Eventos Meta CAPI via GTM dataLayer + n8n webhook
 *
 * Arquitetura dual:
 * 1. dataLayer.push → GTM-W98WXF4D → Stape → Meta CAPI (server-side)
 * 2. POST /api/capi → n8n webhook → Meta CAPI (redundância + rastreio interno)
 *
 * Nunca chama Meta Pixel direto no browser (bloqueável por adblockers).
 */

import { buildEventContext } from './utm'

const IS_PROD = process.env.NODE_ENV === 'production'

/** Push no dataLayer (GTM) */
function dlPush(payload) {
  if (typeof window === 'undefined') return
  window.dataLayer = window.dataLayer || []
  window.dataLayer.push({ ...payload, timestamp: new Date().toISOString() })
}

/** POST para o relay server-side (/api/capi → n8n) */
async function capiRelay(eventName, data) {
  try {
    await fetch('/api/capi', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ event: eventName, data }),
      keepalive: true, // garante envio mesmo em page unload
    })
  } catch {
    // silencia — não bloqueia UX
  }
}

/** Dispara evento em ambos os canais */
function fire(eventName, extraData = {}) {
  const ctx = buildEventContext(extraData)

  // 1. GTM dataLayer
  dlPush({ event: eventName, ...ctx })

  // 2. CAPI relay (server-side)
  capiRelay(eventName, ctx)
}

/* ─────────────────────────────────────────────────
   Eventos padronizados
───────────────────────────────────────────────── */

/**
 * PageView — disparado no carregamento de cada página
 */
export function trackPageView(extras = {}) {
  fire('page_view', extras)
}

/**
 * ViewContent — usuário abriu o drawer de uma ferramenta
 * @param {string} toolName  Nome da ferramenta (ex: "ChatGPT")
 * @param {string} category  Categoria (ex: "Generalistas")
 */
export function trackViewContent(toolName, category) {
  fire('ViewContent', {
    content_name:     toolName,
    content_category: category,
    content_type:     'tool',
  })
}

/**
 * Search — usuário realizou uma busca com resultado
 * @param {string} query  Texto buscado
 * @param {number} count  Número de resultados encontrados
 */
export function trackSearch(query, count) {
  fire('Search', {
    search_string: query,
    result_count:  count,
  })
}

/**
 * SaveTool — usuário salvou/marcou uma ferramenta
 * @param {string} toolName
 */
export function trackSaveTool(toolName) {
  fire('save_tool', {
    content_name: toolName,
    content_type: 'tool',
  })
}

/**
 * Lead — clique em CTA de WhatsApp ou link externo qualificado
 * @param {string} ctaLabel  Texto do botão (ex: "Ver Diretório Completo")
 * @param {string} ctaTarget URL de destino
 */
export function trackLead(ctaLabel, ctaTarget = '') {
  fire('Lead', {
    cta_label:  ctaLabel,
    cta_target: ctaTarget,
    value:      0,
    currency:   'BRL',
  })
}
