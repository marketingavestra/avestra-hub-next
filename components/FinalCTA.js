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
              <strong>Ativar o Copiloto Jurídico</strong> por R$27 e ter 6 agentes trabalhando com você a partir de hoje.
            </p>
          </div>
        </div>

        <p className={`reveal delay-2 ${styles.pathConclusion}`}>
          Só um desses resolve o problema.
        </p>

        <div className={`reveal delay-3 ${styles.ctaGroup}`}>
          <a
            href="https://wa.me/5511965817604?text=Quero%20ativar%20o%20Copiloto%20Jur%C3%ADdico"
            target="_blank"
            rel="noopener noreferrer"
            className={`btn-accent ${styles.ctaBtn}`}
          >
            Ativar o Copiloto por R$27
          </a>
          <p className={styles.ctaNote}>
            Acesso imediato · Sem contrato · Cancela quando quiser
          </p>
        </div>

      </div>
    </section>
  )
}
