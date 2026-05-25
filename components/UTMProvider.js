'use client'

/**
 * components/UTMProvider.js — Captura UTMs no mount e dispara PageView
 *
 * Colocado no layout.js para rodar em todas as páginas.
 * Não renderiza nada visível — só efeito colateral.
 */

import { useEffect, useRef } from 'react'
import { captureUTMs } from '@/lib/utm'
import { trackPageView } from '@/lib/metaEvents'

export default function UTMProvider({ children }) {
  const fired = useRef(false)

  useEffect(() => {
    if (fired.current) return
    fired.current = true

    // 1. Captura + persiste UTMs (URL → storage → referrer → direto)
    const utms = captureUTMs()

    // 2. Dispara PageView com contexto UTM completo
    trackPageView({ utm_captured: true, ...utms })
  }, [])

  return children
}
