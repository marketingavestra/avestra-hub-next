'use client'

import { useState, useEffect } from 'react'
import styles from './ToolDetail.module.css'
import { trackLead } from '@/lib/metaEvents'

const TABS = [
  { key: 'overview',  label: 'Visão Geral' },
  { key: 'howToUse',  label: 'Como Usar' },
  { key: 'tips',      label: 'Dicas' },
  { key: 'prompts',   label: 'Prompts' },
  { key: 'pricing',   label: 'Preço' },
  { key: 'alts',      label: 'Alternativas' },
]

function Stars({ count }) {
  return (
    <div className="stars">
      {Array.from({ length: 5 }, (_, i) => (
        <span key={i} className={i < count ? 'star-filled' : 'star-empty'}>★</span>
      ))}
    </div>
  )
}

function fmt(n) {
  if (n >= 1000) return (n / 1000).toFixed(1).replace('.0', '') + 'k'
  return String(n)
}

/* ─── Tab: Visão Geral ─── */
function TabOverview({ tool }) {
  return (
    <div className={styles.tabContent}>
      <div className={styles.overviewStats}>
        <div className={styles.overviewStat}>
          <span className={styles.overviewStatNum}>{fmt(tool.saves)}</span>
          <span className={styles.overviewStatLabel}>salvaram</span>
        </div>
        <div className={styles.overviewStat}>
          <span className={styles.overviewStatNum}>{fmt(tool.views)}</span>
          <span className={styles.overviewStatLabel}>visualizações</span>
        </div>
        <div className={styles.overviewStat}>
          <span className={styles.overviewStatNum}>{tool.stars}/5</span>
          <span className={styles.overviewStatLabel}>avaliação</span>
        </div>
      </div>

      <div className={styles.overviewText}>
        {(tool.overview || tool.desc).split('\n\n').map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </div>

      <div className={styles.overviewTags}>
        {tool.tags.map((t) => (
          <span key={t} className={styles.tag}>{t}</span>
        ))}
      </div>

      <a
        href={tool.url}
        target={tool.url.startsWith('#') ? '_self' : '_blank'}
        rel="noopener noreferrer"
        className={`btn-accent ${styles.mainCta}`}
      >
        Abrir {tool.name} →
      </a>
    </div>
  )
}

/* ─── Tab: Como Usar ─── */
function TabHowToUse({ tool }) {
  if (!tool.howToUse?.length) {
    return <div className={styles.empty}>Em breve.</div>
  }
  return (
    <div className={styles.tabContent}>
      <p className={styles.tabIntro}>
        Siga os passos abaixo para começar a usar <strong>{tool.name}</strong> no seu escritório.
      </p>
      <div className={styles.steps}>
        {tool.howToUse.map((s) => (
          <div key={s.step} className={styles.step}>
            <div className={styles.stepNum}>{s.step}</div>
            <div className={styles.stepBody}>
              <p className={styles.stepTitle}>{s.title}</p>
              <p className={styles.stepDesc}>{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

/* ─── Tab: Dicas ─── */
function TabTips({ tool }) {
  if (!tool.tips?.length) {
    return <div className={styles.empty}>Em breve.</div>
  }
  return (
    <div className={styles.tabContent}>
      <p className={styles.tabIntro}>
        Dicas práticas para extrair o máximo de valor do <strong>{tool.name}</strong>.
      </p>
      <div className={styles.tips}>
        {tool.tips.map((tip, i) => (
          <div key={i} className={styles.tip}>
            <span className={styles.tipIcon}>{tip.icon}</span>
            <div>
              <p className={styles.tipTitle}>{tip.title}</p>
              <p className={styles.tipDesc}>{tip.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

/* ─── Tab: Prompts ─── */
function TabPrompts({ tool }) {
  const [copied, setCopied] = useState(null)

  const copy = (text, idx) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(idx)
      setTimeout(() => setCopied(null), 2000)
    })
  }

  if (!tool.prompts?.length) {
    return <div className={styles.empty}>Em breve.</div>
  }
  return (
    <div className={styles.tabContent}>
      <p className={styles.tabIntro}>
        Prompts prontos para usar com <strong>{tool.name}</strong>. Clique em "Copiar" e cole direto na ferramenta.
      </p>
      <div className={styles.prompts}>
        {tool.prompts.map((p, i) => (
          <div key={i} className={styles.prompt}>
            <div className={styles.promptHeader}>
              <span className={styles.promptLabel}>{p.label}</span>
              <button
                className={`${styles.promptCopy} ${copied === i ? styles.promptCopied : ''}`}
                onClick={() => copy(p.text, i)}
              >
                {copied === i ? '✓ Copiado' : 'Copiar'}
              </button>
            </div>
            <p className={styles.promptText}>{p.text}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

/* ─── Tab: Preço ─── */
function TabPricing({ tool }) {
  if (!tool.pricing?.plans?.length) {
    return <div className={styles.empty}>Consulte o site oficial.</div>
  }
  return (
    <div className={styles.tabContent}>
      <div className={styles.plans}>
        {tool.pricing.plans.map((plan) => (
          <div key={plan.name} className={`${styles.plan} ${plan.highlight ? styles.planHighlight : ''}`}>
            {plan.highlight && <span className={styles.planBadge}>Recomendado</span>}
            <p className={styles.planName}>{plan.name}</p>
            <p className={styles.planPrice}>{plan.price}</p>
            <ul className={styles.planFeatures}>
              {plan.features.map((f) => (
                <li key={f}>
                  <span className={styles.planCheck}>✓</span>
                  {f}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <a
        href={tool.url}
        target={tool.url.startsWith('#') ? '_self' : '_blank'}
        rel="noopener noreferrer"
        className={`btn-primary ${styles.pricingCta}`}
      >
        Ver planos completos →
      </a>
    </div>
  )
}

/* ─── Tab: Alternativas ─── */
function TabAlts({ tool, allTools, onSelectTool }) {
  if (!tool.alternatives?.length) {
    return <div className={styles.empty}>Sem alternativas cadastradas.</div>
  }
  const alts = allTools.filter((t) => tool.alternatives.includes(t.name))
  return (
    <div className={styles.tabContent}>
      <p className={styles.tabIntro}>Ferramentas similares que também podem atender sua necessidade.</p>
      <div className={styles.altList}>
        {alts.map((alt) => (
          <button key={alt.name} className={styles.altCard} onClick={() => onSelectTool(alt)}>
            <div className={styles.altThumb} style={{ background: alt.gradient }} />
            <div className={styles.altInfo}>
              <p className={styles.altName}>{alt.name}</p>
              <p className={styles.altDesc}>{alt.desc.slice(0, 80)}…</p>
            </div>
            <span className={styles.altArrow}>→</span>
          </button>
        ))}
      </div>
    </div>
  )
}

/* ─── Componente principal: Drawer ─── */
export default function ToolDetail({ tool, allTools, onClose, onSelectTool, saved, onSave }) {
  const [activeTab, setActiveTab] = useState('overview')
  const [imgError, setImgError] = useState(false)

  /* Bloqueia scroll do body quando aberto */
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  /* Reset da aba ao trocar de ferramenta */
  useEffect(() => {
    setActiveTab('overview')
    setImgError(false)
  }, [tool?.name])

  if (!tool) return null

  const availableTabs = TABS.filter((tab) => {
    if (tab.key === 'howToUse') return tool.howToUse?.length > 0
    if (tab.key === 'tips')     return tool.tips?.length > 0
    if (tab.key === 'prompts')  return tool.prompts?.length > 0
    if (tab.key === 'alts')     return tool.alternatives?.length > 0
    return true
  })

  return (
    <>
      {/* Overlay */}
      <div className={styles.overlay} onClick={onClose} aria-hidden />

      {/* Drawer */}
      <aside className={styles.drawer} role="dialog" aria-label={`Detalhes: ${tool.name}`}>

        {/* ── Header ── */}
        <div className={styles.drawerHeader}>
          <div className={styles.headerThumb} style={{ background: tool.gradient }}>
            <div className={styles.headerLogoWrap} style={{ background: tool.logoBg || '#fff' }}>
              {tool.logoUrl && !imgError ? (
                <img
                  src={tool.logoUrl}
                  alt={tool.name}
                  width={32}
                  height={32}
                  onError={() => setImgError(true)}
                />
              ) : (
                <span className={styles.headerAbbr}>{tool.abbr}</span>
              )}
            </div>
          </div>

          <button className={styles.closeBtn} onClick={onClose} aria-label="Fechar">✕</button>
        </div>

        {/* ── Identidade ── */}
        <div className={styles.identity}>
          <div className={styles.identityMain}>
            <div>
              <h2 className={styles.toolName}>{tool.name}</h2>
              <div className={styles.identityMeta}>
                <Stars count={tool.stars} />
                <span className={`${styles.badge} ${styles[`badge--${tool.badgeType}`]}`}>
                  {tool.badge}
                </span>
                <span className={styles.categoryPill}>{tool.category}</span>
              </div>
            </div>

            <div className={styles.identityActions}>
              <button
                className={`${styles.saveBtn} ${saved ? styles.saveBtnActive : ''}`}
                onClick={() => onSave(tool.name)}
              >
                {saved ? '🔖 Salvo' : '🔖 Salvar'}
              </button>
              <a
                href={tool.url}
                target={tool.url.startsWith('#') ? '_self' : '_blank'}
                rel="noopener noreferrer"
                className={styles.visitBtn}
                onClick={() => { trackLead(`Usar ferramenta – ${tool.name}`, tool.url); onClose() }}
              >
                Usar ferramenta →
              </a>
            </div>
          </div>
          <p className={styles.toolDesc}>{tool.desc}</p>
        </div>

        {/* ── Tabs ── */}
        <div className={styles.tabs}>
          {availableTabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`${styles.tab} ${activeTab === tab.key ? styles.tabActive : ''}`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* ── Conteúdo das Tabs ── */}
        <div className={styles.drawerBody}>
          {activeTab === 'overview' && <TabOverview tool={tool} />}
          {activeTab === 'howToUse' && <TabHowToUse tool={tool} />}
          {activeTab === 'tips'     && <TabTips tool={tool} />}
          {activeTab === 'prompts'  && <TabPrompts tool={tool} />}
          {activeTab === 'pricing'  && <TabPricing tool={tool} />}
          {activeTab === 'alts'     && (
            <TabAlts tool={tool} allTools={allTools} onSelectTool={(t) => { onSelectTool(t) }} />
          )}
        </div>

        {/* ── Footer fixo ── */}
        <div className={styles.drawerFooter}>
          <div className={styles.footerStats}>
            <span>👁 {fmt(tool.views)} views</span>
            <span>·</span>
            <span>🔖 {fmt(tool.saves)} salvos</span>
          </div>
          <span className={styles.footerPrice}>{tool.price}</span>
        </div>
      </aside>
    </>
  )
}
