'use client'

import { useState, useMemo, useEffect, useRef } from 'react'
import styles from './Directory.module.css'
import ToolDetail from './ToolDetail'
import { TOOLS } from '@/data/tools-card'
import { trackViewContent, trackSearch, trackSaveTool, trackLead } from '@/lib/metaEvents'

/* ─── Categorias + opções ─── */
const CATEGORIES = [
  { label: 'Todas',               icon: '⊞' },
  { label: 'Generalistas',        icon: '🤖' },
  { label: 'Pesquisa Jurídica',   icon: '⚖️' },
  { label: 'Redação de Peças',    icon: '✍️' },
  { label: 'Gestão de Escritório',icon: '📊' },
  { label: 'Automação',           icon: '⚡' },
  { label: 'Jurimetria',          icon: '📈' },
]

const SORT_OPTIONS = [
  { key: 'trending', label: '🔥 Trending' },
  { key: 'saves',    label: '🔖 Mais Salvos' },
  { key: 'views',    label: '👁 Mais Vistos' },
  { key: 'az',       label: 'A–Z' },
]

const BADGE_FILTERS = ['Todos', 'Freemium', 'Pago', 'Enterprise', 'Novo']

/* ─── Helpers ─── */
function fmt(n) {
  if (n >= 1000) return (n / 1000).toFixed(1).replace('.0', '') + 'k'
  return String(n)
}

function Stars({ count }) {
  return (
    <div className="stars">
      {Array.from({ length: 5 }, (_, i) => (
        <span key={i} className={i < count ? 'star-filled' : 'star-empty'}>★</span>
      ))}
    </div>
  )
}

/* ─── ToolCard ─── */
function ToolCard({ tool, onSave, saved, onOpen }) {
  const [imgError, setImgError] = useState(false)
  const [shotError, setShotError] = useState(false)

  return (
    <div
      className={`${styles.card} ${tool.featured ? styles.cardFeatured : ''}`}
      onClick={() => onOpen(tool)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && onOpen(tool)}
      title={`Ver detalhes: ${tool.name}`}
    >
      {/* Thumbnail */}
      <div className={styles.cardThumb} style={{ background: tool.gradient }}>
        {tool.screenshotUrl && !shotError && (
          <img
            src={tool.screenshotUrl}
            alt={`${tool.name} preview`}
            className={styles.cardScreenshot}
            loading="lazy"
            onError={() => setShotError(true)}
          />
        )}
        <div className={styles.cardThumbOverlay} />
        {tool.featured && <span className={styles.featuredBadge}>★ Destaque</span>}
        <span className={`${styles.badgePill} ${styles[`badge--${tool.badgeType}`]}`}>
          {tool.badge}
        </span>
      </div>

      {/* Body */}
      <div className={styles.cardBody}>
        <div className={styles.cardHeader}>
          {/* Logo */}
          <div className={styles.cardLogo} style={{ background: tool.logoBg || '#fff' }}>
            {tool.logoUrl && !imgError ? (
              <img
                src={tool.logoUrl} alt={tool.name}
                width={28} height={28}
                onError={() => setImgError(true)} loading="lazy"
              />
            ) : (
              <span className={styles.cardAbbr}>{tool.abbr}</span>
            )}
          </div>

          {/* Nome + estrelas */}
          <div className={styles.cardTitleGroup}>
            <h3 className={styles.cardName}>{tool.name}</h3>
            <Stars count={tool.stars} />
          </div>

          {/* Salvar — stopPropagation para não abrir o drawer */}
          <button
            className={`${styles.saveBtn} ${saved ? styles.saveBtnActive : ''}`}
            onClick={(e) => { e.stopPropagation(); onSave(tool.name) }}
            title={saved ? 'Remover dos salvos' : 'Salvar'}
          >
            <span>🔖</span>
            <span className={saved ? styles.saveBtnCountActive : styles.saveBtnCount}>
              {fmt(tool.saves + (saved ? 1 : 0))}
            </span>
          </button>
        </div>

        <p className={styles.cardDesc}>{tool.desc}</p>

        <div className={styles.cardTags}>
          {tool.tags.map((t) => (
            <span key={t} className={styles.tag}>{t}</span>
          ))}
        </div>

        <div className={styles.cardFooter}>
          <div className={styles.cardStats}>
            <span className={styles.statItem}>
              <span className={styles.statIcon}>👁</span>
              {fmt(tool.views)}
            </span>
            <span className={styles.statDot}>·</span>
            <span className={styles.statItem}>{tool.category}</span>
          </div>
          <div className={styles.cardActions}>
            <span className={styles.priceTag}>{tool.price}</span>
            <span className={styles.openBtn}>Ver detalhes →</span>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ─── Componente principal ─── */
export default function Directory() {
  const [activeCategory, setActiveCategory] = useState('Todas')
  const [activeBadge, setActiveBadge]       = useState('Todos')
  const [sort, setSort]                     = useState('trending')
  const [query, setQuery]                   = useState('')
  const [saved, setSaved]                   = useState(new Set())
  const [sidebarOpen, setSidebarOpen]       = useState(false)
  const [selectedTool, setSelectedTool]     = useState(null)

  // Debounce para trackSearch — só dispara após 1.2s sem digitar
  const searchTimer = useRef(null)

  /* Contagem por categoria */
  const counts = useMemo(() => {
    const map = {}
    CATEGORIES.forEach(({ label }) => {
      map[label] = label === 'Todas'
        ? TOOLS.length
        : TOOLS.filter((t) => t.category === label).length
    })
    return map
  }, [])

  /* Filtragem + ordenação */
  const filtered = useMemo(() => {
    let list = [...TOOLS]
    if (activeCategory !== 'Todas') list = list.filter((t) => t.category === activeCategory)
    if (activeBadge !== 'Todos')    list = list.filter((t) => t.badge === activeBadge)
    const q = query.trim().toLowerCase()
    if (q) {
      list = list.filter(
        (t) =>
          t.name.toLowerCase().includes(q) ||
          t.desc.toLowerCase().includes(q) ||
          t.category.toLowerCase().includes(q) ||
          t.tags.some((tag) => tag.toLowerCase().includes(q))
      )
    }
    if (sort === 'saves')    list = [...list].sort((a, b) => b.saves - a.saves)
    if (sort === 'views')    list = [...list].sort((a, b) => b.views - a.views)
    if (sort === 'az')       list = [...list].sort((a, b) => a.name.localeCompare(b.name, 'pt-BR'))
    if (sort === 'trending') list = [...list].sort((a, b) => (b.saves * 2 + b.views) - (a.saves * 2 + a.views))
    return list
  }, [activeCategory, activeBadge, sort, query])

  /* Track Search — debounced, só quando há query com resultado */
  useEffect(() => {
    const q = query.trim()
    if (!q) return
    clearTimeout(searchTimer.current)
    searchTimer.current = setTimeout(() => {
      trackSearch(q, filtered.length)
    }, 1200)
    return () => clearTimeout(searchTimer.current)
  }, [query, filtered.length])

  /* Abre drawer + carrega dados ricos (lazy import) + rastreia ViewContent */
  const openTool = async (tool) => {
    trackViewContent(tool.name, tool.category)
    // Já abre o drawer com os dados básicos enquanto carrega os detalhes
    setSelectedTool(tool)
    try {
      const { TOOLS_DETAIL } = await import('@/data/tools-detail')
      const detail = TOOLS_DETAIL[tool.name] || {}
      setSelectedTool((prev) => prev?.name === tool.name ? { ...prev, ...detail } : prev)
    } catch (e) {
      // se falhar, o drawer continua funcionando com os dados básicos
    }
  }

  /* Salvar/remover + rastreia SaveTool */
  const toggleSave = (name) => {
    setSaved((prev) => {
      const next = new Set(prev)
      const isAdding = !next.has(name)
      isAdding ? next.add(name) : next.delete(name)
      if (isAdding) trackSaveTool(name)
      return next
    })
  }

  const clearFilters = () => { setQuery(''); setActiveCategory('Todas'); setActiveBadge('Todos') }

  /* Rastreia clique nos CTAs de WhatsApp */
  const handleCtaClick = (label, href) => {
    trackLead(label, href)
  }

  return (
    <section id="diretorio" className={styles.section}>

      {/* ── Stats Bar ── */}
      <div className={styles.statsBar}>
        <div className={styles.statsBarInner}>
          <span className={styles.statBadge}>
            <span className={styles.statNum}>{TOOLS.length}+</span> ferramentas
          </span>
          <span className={styles.statSep}>·</span>
          <span className={styles.statBadge}>
            <span className={styles.statNum}>{CATEGORIES.length - 1}</span> categorias
          </span>
          <span className={styles.statSep}>·</span>
          <span className={styles.statBadge}>Atualizado Maio/2026</span>
          <span className={styles.statSep}>·</span>
          <span className={`${styles.statBadge} ${styles.statBadgeLive}`}>
            <span className={styles.liveDot} />
            Conteúdo gratuito
          </span>
        </div>
      </div>

      <div className={styles.inner}>

        {/* ── Cabeçalho ── */}
        <div className={`reveal ${styles.heading}`}>
          <span className="section-label">Diretório</span>
          <h2 className={styles.headline}>
            A IA certa pra
            <span className="text-gradient"> cada etapa do seu trabalho</span>
          </h2>
          <p className={styles.sub}>
            São {TOOLS.length}+ ferramentas testadas. Cada card tem guia de uso, dicas e prompts pra copiar e usar agora.
          </p>
        </div>

        {/* ── Busca ── */}
        <div className={`reveal delay-1 ${styles.searchWrap}`}>
          <div className={styles.searchBox}>
            <span className={styles.searchIcon}>🔍</span>
            <input
              type="text"
              className={styles.searchInput}
              placeholder="Buscar ferramenta, categoria ou uso (ex: petição, automação...)"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            {query && (
              <button className={styles.searchClear} onClick={() => setQuery('')}>✕</button>
            )}
          </div>
          <div className={styles.sortTabs}>
            {SORT_OPTIONS.map((s) => (
              <button
                key={s.key}
                onClick={() => setSort(s.key)}
                className={`${styles.sortTab} ${sort === s.key ? styles.sortTabActive : ''}`}
              >
                {s.label}
              </button>
            ))}
          </div>
        </div>

        {/* ── Layout ── */}
        <div className={styles.layout}>

          {/* Toggle mobile */}
          <button className={styles.sidebarToggle} onClick={() => setSidebarOpen(!sidebarOpen)}>
            <span>☰ Categorias</span>
            <span className={styles.sidebarToggleBadge}>{activeCategory}</span>
          </button>

          {/* Sidebar */}
          <aside className={`${styles.sidebar} ${sidebarOpen ? styles.sidebarOpen : ''}`}>
            <div className={styles.sidebarSection}>
              <p className={styles.sidebarTitle}>Categorias</p>
              {CATEGORIES.map(({ label, icon }) => (
                <button
                  key={label}
                  onClick={() => { setActiveCategory(label); setSidebarOpen(false) }}
                  className={`${styles.sidebarItem} ${activeCategory === label ? styles.sidebarItemActive : ''}`}
                >
                  <span className={styles.sidebarIcon}>{icon}</span>
                  <span className={styles.sidebarLabel}>{label}</span>
                  <span className={styles.sidebarCount}>{counts[label]}</span>
                </button>
              ))}
            </div>

            <div className={styles.sidebarSection}>
              <p className={styles.sidebarTitle}>Preço</p>
              {BADGE_FILTERS.map((b) => (
                <button
                  key={b}
                  onClick={() => setActiveBadge(b)}
                  className={`${styles.sidebarItem} ${activeBadge === b ? styles.sidebarItemActive : ''}`}
                >
                  <span className={styles.sidebarLabel}>{b}</span>
                </button>
              ))}
            </div>

            {/* CTA sidebar */}
            <div className={styles.sidebarCta}>
              <p className={styles.sidebarCtaTitle}>Precisa de algo feito pra você?</p>
              <p className={styles.sidebarCtaDesc}>A Avestra configura seus agentes em 48h. Você usa, eles trabalham.</p>
              <a
                href="https://wa.me/5511965817604?text=Quero%20uma%20skill%20sob%20medida"
                target="_blank" rel="noopener noreferrer"
                className={`btn-accent ${styles.sidebarCtaBtn}`}
                onClick={() => handleCtaClick('Skill sob medida – sidebar', 'https://wa.me/5511965817604')}
              >
                Falar no WhatsApp
              </a>
            </div>
          </aside>

          {/* Grid */}
          <div className={styles.gridWrap}>
            <div className={styles.gridMeta}>
              <span className={styles.gridCount}>
                {filtered.length} ferramenta{filtered.length !== 1 ? 's' : ''}
                {activeCategory !== 'Todas' && ` em ${activeCategory}`}
                {query && ` · "${query}"`}
              </span>
              {(query || activeCategory !== 'Todas' || activeBadge !== 'Todos') && (
                <button className={styles.clearBtn} onClick={clearFilters}>✕ Limpar filtros</button>
              )}
            </div>

            {filtered.length > 0 ? (
              <div className={styles.grid}>
                {filtered.map((tool) => (
                  <ToolCard
                    key={tool.name}
                    tool={tool}
                    saved={saved.has(tool.name)}
                    onSave={toggleSave}
                    onOpen={openTool}
                  />
                ))}
              </div>
            ) : (
              <div className={styles.empty}>
                <span className={styles.emptyIcon}>🔍</span>
                <p className={styles.emptyTitle}>Nenhum resultado</p>
                <p className={styles.emptyDesc}>
                  Tente outro termo ou{' '}
                  <button className={styles.emptyLink} onClick={clearFilters}>limpe os filtros</button>.
                </p>
              </div>
            )}

            <div className={`reveal delay-2 ${styles.footerCta}`}>
              <p className={styles.footerCtaNote}>
                Tem mais de 21 ferramentas esperando no diretório completo. Curadoria nova toda semana.
              </p>
              <a
                href="https://wa.me/5511965817604?text=Quero%20acesso%20ao%20diret%C3%B3rio%20completo"
                className="btn-accent" target="_blank" rel="noopener noreferrer"
                onClick={() => handleCtaClick('Ver Diretório Completo', 'https://wa.me/5511965817604')}
              >
                Quero o Diretório Completo ↗
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ── Drawer de detalhe ── */}
      {selectedTool && (
        <ToolDetail
          tool={selectedTool}
          allTools={TOOLS}
          saved={saved.has(selectedTool.name)}
          onSave={toggleSave}
          onClose={() => setSelectedTool(null)}
          onSelectTool={(t) => openTool(t)}
        />
      )}
    </section>
  )
}
