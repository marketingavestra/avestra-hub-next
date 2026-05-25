import styles from './FinalCTA.module.css'

export default function FinalCTA() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>

        <p className={styles.opening}>Antes de fechar essa aba</p>

        <div className={`reveal ${styles.body}`}>
          <p>Você acabou de ver o que existe no mercado.</p>
          <p>
            30+ ferramentas. Prompts prontos. Agentes configurados. Tudo testado por quem usa no dia a dia.
          </p>
          <p>
            Fazer manualmente o que a IA resolve em segundos vai ficando cada vez mais difícil de justificar.
            Você sabe disso. Só ainda não começou.
          </p>
          <p className={styles.emphasis}>
            Começar é a parte mais fácil.
            <br />
            O resto a gente resolve com você.
          </p>
        </div>

        <div className={`reveal delay-1 ${styles.divider}`} />

        <div className={`reveal delay-2 ${styles.paths}`}>
          <div className={styles.path}>
            <span className={styles.pathNum}>01</span>
            <p>
              <strong>Continuar no improviso</strong>, cada processo do zero, sem ferramenta e sem processo.
            </p>
          </div>
          <div className={styles.path}>
            <span className={styles.pathNum}>02</span>
            <p>
              <strong>Ativar minha primeira Skill Jurídica</strong> por R$27 e começar a automatizar tarefas reais do escritório ainda hoje.
            </p>
          </div>
        </div>

        <p className={`reveal delay-2 ${styles.pathConclusion}`}>
          Só um desses resolve o problema.
        </p>

        <p className={`reveal delay-2 ${styles.preCtaLine}`}>
          Fazer petição, revisar contrato e pesquisar jurisprudência do mesmo jeito de 3 anos atrás está ficando cada vez mais caro.
        </p>

        <div className={`reveal delay-3 ${styles.ctaGroup}`}>
          <a
            href="https://wa.me/5511965817604?text=Quero%20minha%20Skill%20Jur%C3%ADdica"
            target="_blank"
            rel="noopener noreferrer"
            className={`btn-accent ${styles.ctaBtn}`}
          >
            Quero minha Skill Jurídica por R$27
          </a>
          <p className={styles.ctaNote}>
            Entrega em 48h · Sem mensalidade · Garantia total
          </p>
        </div>

      </div>
    </section>
  )
}
