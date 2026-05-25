import styles from './Hero.module.css'

const CATEGORIES = ['Generalistas', 'Pesquisa Jurídica', 'Contratos', 'Automação']

const CHIPS = ['Diretório Completo', 'Skills Prontas', 'Agentes Personalizados']

export default function Hero() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>

        {/* ── Coluna de texto ── */}
        <div className={styles.content}>
          <div className={`reveal ${styles.badge}`}>
            <span className={styles.dot} />
            Gratuito · Sem Cadastro · Sem Cartão
          </div>

          <h1 className={`reveal delay-1 ${styles.headline}`}>
            A IA certa<br />
            <span className={`text-gradient ${styles.headlineLine}`}>já existe.</span><br />
            Você só precisa encontrar.
          </h1>

          <p className={`reveal delay-2 ${styles.sub}`}>
            Testamos cada ferramenta. Descartamos o que não funciona.
            <br />
            O que ficou está aqui — com guia de uso, prompts prontos e preço real.
          </p>

          <div className={`reveal delay-2 ${styles.chips}`}>
            {CHIPS.map((c) => (
              <span key={c} className={styles.chip}>{c}</span>
            ))}
          </div>

          <div className={`reveal delay-3 ${styles.ctaGroup}`}>
            <a href="#diretorio" className={`btn-accent ${styles.ctaBtn}`}>
              Ver as Ferramentas
            </a>
            <p className={styles.ctaNote}>
              Sem cadastro · Acesso agora · 100% gratuito
            </p>
          </div>
        </div>

        {/* ── Painel visual ── */}
        <div className={`reveal delay-2 ${styles.visual}`}>
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <div className={styles.cardDots}>
                <span className={styles.cardDot} />
                <span className={styles.cardDot} />
                <span className={styles.cardDot} />
              </div>
              <span className={styles.cardTitle}>Diretório de IAs Jurídicas</span>
            </div>

            <div className={styles.stat}>
              <span className={styles.statNum}>30+</span>
              <span className={styles.statLabel}>ferramentas curadas</span>
            </div>

            <div className={styles.sep} />

            <ul className={styles.catList}>
              {CATEGORIES.map((cat) => (
                <li key={cat} className={styles.catItem}>
                  <span className={styles.catDot} />
                  <span className={styles.catName}>{cat}</span>
                </li>
              ))}
            </ul>

            <div className={styles.sep} />

            <p className={styles.cardMeta}>
              Curadoria Avestra &middot; Atualizado Maio/2026
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}
