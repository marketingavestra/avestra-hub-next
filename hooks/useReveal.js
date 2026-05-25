'use client'

import { useEffect } from 'react'

/**
 * useReveal — aplica a classe 'visible' em elementos com a classe 'reveal'
 * usando IntersectionObserver. Chame no layout raiz ou em cada seção.
 */
export default function useReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12 }
    )

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])
}
