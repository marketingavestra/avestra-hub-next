import styles from './Bridge.module.css'

const STAGES = [
  {
    num: '01',
    label: 'Hub Central',
    headline: 'Resolve clareza operacional',
    desc: 'Você entende rapidamente quais IAs realmente fazem sentido para sua rotina jurídica. Sem perder semanas testando ferramenta aleatória.',
  },
  {
    num: '02',
    label: 'Marketplace',
    headline: 'Resolve gargalos operacionais',
    desc: 'Você pega um agente pronto para uma dor específica. Revisão de contrato. Pesquisa jurisprudencial. Proposta comercial. Resultado em 48h, sem configurar nada.',
  },
  {
    num: '03',
    label: 'Copiloto Jurídico',
    headline: 'Resolve operação',
    desc: 'Você centraliza pesquisa, petições, contratos, prazos e honorários num ambiente só. A IA deixa de ser curiosidade. E começa a virar infraestrutura operacional.',
  },
  {
    num: '04',
    label: 'Mentoria',
    headline: 'Resolve escala operacional',
    desc: 'Você implementa IA com método no escritório inteiro. Não só no seu computador. Escala com estrutura. Sem tentativa e erro.',
  },
]

export default function Bridge() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>

        <div className="reveal">
          <span className="section-label">A jornada completa</span>
          <h2 className={styles.headline}>
            Não são produtos soltos.
            <span className={`text-gradient ${styles.headlineLine}`}> São camadas operacionais da advocacia moderna.</span>
          </h2>
          <p className={styles.body}>
            Você entra pelo ponto que faz sentido agora.
            Cada etapa resolve um nível diferente da operação jurídica.
          </p>
        </div>

        <div className={`reveal delay-1 ${styles.stages}`}>
          {STAGES.map((s, i) => (
            <div key={s.num} className={styles.stage}>
              <div className={styles.stageLeft}>
                <div className={styles.stageNum}>{s.num}</div>
                {i < STAGES.length - 1 && <div className={styles.stageLine} />}
              </div>
              <div className={styles.stageRight}>
                <span className={styles.stageTag}>{s.label}</span>
                <p className={styles.stageHeadline}>{s.headline}</p>
                <p className={styles.stageDesc}>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <p className={`reveal delay-2 ${styles.conclusion}`}>
          Quando essa percepção acontece, o funil escala com muito menos esforço comercial.
        </p>

      </div>
    </section>
  )
}
