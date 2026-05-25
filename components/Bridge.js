import styles from './Bridge.module.css'

const STAGES = [
  {
    num: '01',
    label: 'Hub Central',
    headline: 'Resolve curiosidade',
    desc: 'Você conhece o que existe. Testa. Filtra. Entende o que funciona de verdade para o seu tipo de trabalho. Sem perder horas em ferramenta errada.',
  },
  {
    num: '02',
    label: 'Marketplace',
    headline: 'Resolve tarefas',
    desc: 'Você pega um agente pronto para uma dor específica. Revisão de contrato. Pesquisa jurisprudencial. Proposta comercial. Resultado em 48h, sem configurar nada.',
  },
  {
    num: '03',
    label: 'Copiloto Jurídico',
    headline: 'Resolve operação',
    desc: 'Você centraliza pesquisa, petições, contratos, prazos e honorários num ambiente só. Deixa de ser ferramenta. Vira rotina. O escritório começa a funcionar diferente.',
  },
  {
    num: '04',
    label: 'Mentoria',
    headline: 'Resolve crescimento',
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
            Não são produtos separados.
            <span className={`text-gradient ${styles.headlineLine}`}> São camadas.</span>
          </h2>
          <p className={styles.body}>
            Você entra pelo ponto que faz sentido agora.
            O sistema leva ao próximo de forma natural. Sem salto forçado.
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