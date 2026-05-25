import styles from './FinalCTA.module.css'

export default function FinalCTA() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>

        <p className={styles.opening}>Uma última coisa</p>

        <div className={`reveal ${styles.body}`}>
          <p>Você viu o que é possível.</p>
          <p>
            30+ ferramentas. Skills prontas. Agentes personalizados. Curso completo.
          </p>
          <p>
            Fazer manualmente o que a IA faz em segundos está ficando insustentável.
            Você sabe disso.
          </p>
          <p className={styles.emphasis}>
            A decisão já foi tomada.
            <br />
            Falta só executar.
          </p>
        </div>

        <div className={`reveal delay-1 ${styles.divider}`} />

        <div className={`reveal delay-2 ${styles.paths}`}>
          <div className={styles.path}>
            <span className={styles.pathNum}>01</span>
            <p>
              <strong>Continuar tentando sozinho</strong>, sem resultado real.
            </p>
          </div>
          <div className={styles.path}>
            <span className={styles.pathNum}>02</span>
            <p>
              <strong>Ter um agente treinado para você</strong>, pronto em 48h, por R$27.
            </p>
          </div>
        </div>

        <p className={`reveal delay-2 ${styles.pathConclusion}`}>
          Só um desses resolve de verdade.
        </p>

        <div className={`reveal delay-3 ${styles.ctaGroup}`}>
          <a
            href="https://wa.me/5511965817604?text=Quero%20come%C3%A7ar%20com%20a%20Avestra"
            target="_blank"
            rel="noopener noreferrer"
            className={`btn-accent ${styles.ctaBtn}`}
          >
            Quero Começar Agora
          </a>
          <p className={styles.ctaNote}>
            Pagamento seguro &middot; Entrega em 48h &middot; Garantia total
          </p>
        </div>

      </div>
    </section>
  )
}
