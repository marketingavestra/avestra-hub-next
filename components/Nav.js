'use client'

import { useState, useEffect } from 'react'
import styles from './Nav.module.css'

const LINKS = [
  { label: 'Diretório', href: '#diretorio' },
  { label: 'Skills',    href: '#skills' },
  { label: 'Preços',    href: '#ofertas' },
]

export default function Nav() {
  const [open, setOpen]         = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const close = () => setOpen(false)

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.navScrolled : ''}`}>
      <div className={styles.inner}>

        {/* Logo + badge */}
        <a href="/" className={styles.logo}>
          AVESTRA
          <span className={styles.logoBadge}>HUB</span>
        </a>

        {/* Links desktop */}
        <div className={`${styles.links} ${open ? styles.linksOpen : ''}`}>
          {LINKS.map((l) => (
            <a key={l.label} href={l.href} className={styles.link} onClick={close}>
              {l.label}
            </a>
          ))}
        </div>

        <div className={styles.actions}>
          {/* Search hint */}
          <button
            className={styles.searchHint}
            onClick={() => {
              const el = document.querySelector('#diretorio input')
              if (el) { el.focus(); el.scrollIntoView({ behavior: 'smooth', block: 'center' }) }
            }}
          >
            <span className={styles.searchHintIcon}>🔍</span>
            <span className={styles.searchHintText}>Buscar ferramenta...</span>
          </button>

          <a href="#ofertas" className={styles.cta} onClick={close}>
            Ver Planos
          </a>

          <button
            className={`${styles.hamburger} ${open ? styles.hamburgerOpen : ''}`}
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          >
            <span /><span /><span />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className={styles.drawer}>
          {LINKS.map((l) => (
            <a key={l.label} href={l.href} className={styles.drawerLink} onClick={close}>
              {l.label}
            </a>
          ))}
          <a href="#ofertas" className={styles.drawerCta} onClick={close}>
            Ver Planos
          </a>
        </div>
      )}
    </nav>
  )
}
