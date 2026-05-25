/**
 * lib/utm.js — Captura e normalização de UTMs
 *
 * Regras (docs: Obsidian/AVESTRA/Processos/Instalação UTM):
 * 1. Se URL tiver utm_source → usa esse valor
 * 2. Se não → detecta pela referência (referrer)
 * 3. Nunca deixa utm_source vazio → fallback = 'direto'
 * 4. Persiste no localStorage para manter o source entre páginas
 */

const STORAGE_KEY = 'avestra_utms'

/** Mapa de domínios de referrer → utm values */
const REFERRER_MAP = [
  {
    patterns: ['instagram.com', 'l.instagram.com', 'lm.facebook.com'],
    source: 'instagram',
    medium: 'organic-social',
  },
  {
    patterns: ['facebook.com', 'fb.com', 'm.facebook.com', 'web.facebook.com', 'l.facebook.com'],
    source: 'facebook',
    medium: 'organic-social',
  },
  {
    patterns: ['google.com', 'google.com.br', 'google.co'],
    source: 'google',
    medium: 'organic',
  },
  {
    patterns: ['youtube.com', 'youtu.be', 'm.youtube.com'],
    source: 'youtube',
    medium: 'organic-social',
  },
  {
    patterns: ['wa.me', 'web.whatsapp.com', 'api.whatsapp.com', 'whatsapp.com'],
    source: 'whatsapp',
    medium: 'referral',
  },
  {
    patterns: ['linkedin.com', 'lnkd.in'],
    source: 'linkedin',
    medium: 'organic-social',
  },
  {
    patterns: ['t.co', 'twitter.com', 'x.com'],
    source: 'twitter',
    medium: 'organic-social',
  },
]

/** Detecta source/medium pelo referrer */
function detectFromReferrer(referrer) {
  if (!referrer) return { utm_source: 'direto', utm_medium: 'direct' }

  try {
    const hostname = new URL(referrer).hostname.replace(/^www\./, '')
    const match = REFERRER_MAP.find((entry) =>
      entry.patterns.some((p) => hostname === p || hostname.endsWith('.' + p))
    )
    if (match) {
      return { utm_source: match.source, utm_medium: match.medium }
    }
    return { utm_source: 'referral', utm_medium: 'referral', utm_content: hostname }
  } catch {
    return { utm_source: 'direto', utm_medium: 'direct' }
  }
}

/** Lê UTMs da URL atual */
function getFromUrl() {
  if (typeof window === 'undefined') return {}

  const params = new URLSearchParams(window.location.search)
  const utms = {}
  const keys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term']

  keys.forEach((k) => {
    const v = params.get(k)
    if (v) utms[k] = v.toLowerCase().trim()
  })

  return utms
}

/** Carrega UTMs salvos no localStorage */
function getFromStorage() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : null
  } catch {
    return null
  }
}

/** Salva UTMs no localStorage */
function saveToStorage(utms) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(utms))
  } catch {
    // storage bloqueado (Safari privado etc.) — silencia
  }
}

/**
 * Captura UTMs com ordem de prioridade:
 * 1. URL params (maior prioridade)
 * 2. localStorage (visita anterior na mesma sessão/dia)
 * 3. Referrer (detectado automaticamente)
 * 4. Fallback: source=direto
 */
export function captureUTMs() {
  if (typeof window === 'undefined') return {}

  const fromUrl = getFromUrl()
  const hasUrlSource = Boolean(fromUrl.utm_source)

  if (hasUrlSource) {
    // URL tem UTMs → usa e salva
    const saved = saveToStorage(fromUrl)
    return fromUrl
  }

  // Sem UTM na URL → tenta storage (atribuição de primeira visita)
  const stored = getFromStorage()
  if (stored?.utm_source) return stored

  // Sem storage → detecta pelo referrer
  const referrerData = detectFromReferrer(document.referrer)
  saveToStorage(referrerData)
  return referrerData
}

/** Retorna UTMs do storage sem nova captura (para eventos subsequentes) */
export function getStoredUTMs() {
  if (typeof window === 'undefined') return {}
  return getFromStorage() || { utm_source: 'direto', utm_medium: 'direct' }
}

/** Gera objeto de contexto para eventos (inclui page info) */
export function buildEventContext(extra = {}) {
  const utms = getStoredUTMs()
  return {
    ...utms,
    page_url:  typeof window !== 'undefined' ? window.location.href : '',
    page_path: typeof window !== 'undefined' ? window.location.pathname : '',
    referrer:  typeof document !== 'undefined' ? document.referrer : '',
    timestamp: new Date().toISOString(),
    ...extra,
  }
}
