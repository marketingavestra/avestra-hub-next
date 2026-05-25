import styles from './Hero.module.css'

const CHECKS = [
  'Ferramentas testadas na prática',
  'Prompts prontos para usar',
  'Guias rápidos de aplicação',
  'Preço real de cada ferramenta',
  'Organizadas por função jurídica',
]

export default function Hero() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>

        {/* ── Coluna de texto ── */}
        <div className={styles.content}>
          <div className={`reveal ${styles.badge}`}>
            <span className={styles.dot} />
            Acesso gratuito · Sem cadastro · Sem cartão
          </div>

          <h1 className={`reveal delay-1 ${styles.headline}`}>
            O advogado que ainda faz<br />
            <span className={`text-gradient ${styles.headlineLine}`}>tudo manualmente</span><br />
            está ficando caro para<br />
            o próprio escritório.
          </h1>

          <div className={`reveal delay-2 ${styles.subBlock}`}>
            <p className={styles.sub}>
              Petições, contratos, pesquisa jurídica e tarefas repetitivas já podem ser
              aceleradas com IA. O problema é que a maioria das ferramentas faz você perder tempo.
            </p>
            <p className={styles.sub}>
              Nós testamos dezenas de IAs, descartamos as que não funcionam e reunimos
              só as que realmente ajudam advogados a produzir mais e reduzir retrabalho.
            </p>
            <ul className={styles.checks}>
              {CHECKS.map((c) => (
                <li key={c} className={styles.checkItem}>
                  <span className={styles.checkMark}>&#10003;</span>
                  {c}
                </li>
              ))}
            </ul>
          </div>

          <div className={`reveal delay-3 ${styles.ctaGroup}`}>
            <a href="#diretorio" className={`btn-accent ${styles.ctaBtn}`}>
              Acessar Diretório Jurídico Gratuito
            </a>
            <p className={styles.ctaNote}>
              Sem cadastro · Sem cartão · Acesso imediato
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
              <span className={styles.statLabel}>ferramentas jurídicas testadas na prática</span>
            </div>

            <div className={styles.sep} />

            <ul className={styles.catList}>
              {['Generalistas', 'Pesquisa Jurídica', 'Contratos', 'Automação'].map((cat) => (
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
