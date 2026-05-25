'use client'

import useReveal from '@/hooks/useReveal'

/**
 * Client Component que ativa o IntersectionObserver de scroll reveal.
 * Inserido no layout.js para cobrir todas as páginas.
 */
export default function RevealProvider({ children }) {
  useReveal()
  return <>{children}</>
}
