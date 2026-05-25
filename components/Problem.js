import styles from './Problem.module.css'

const points = [
  {
    num: '01',
    text: (
      <>
        Advogados que dominam IA entregam <strong>3x mais</strong> no mesmo tempo.
        E cobram mais caro por isso.
      </>
    ),
  },
  {
    num: '02',
    text: (
      <>
        Pesquisas que levam horas: feitas em <strong>minutos</strong>. Peças
        processuais estruturadas em <strong>segundos</strong>.
      </>
    ),
  },
  {
    num: '03',
    text: (
      <>
        O problema não é falta de ferramenta. É{' '}
        <strong>saber quais usar e como configurar</strong> para o jurídico.
      </>
    ),
  },
]

export default function Problem() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>

        <div className={`reveal ${styles.left}`}>
          <span className="section-label">A realidade do mercado jurídico</span>
          <h2 className={styles.headline}>
            Enquanto você
            <span className={`text-gradient ${styles.headlineLine}`}> trabalha manualmente,</span>
            <br />
            seus concorrentes já usam IA.
          </h2>
        </div>

        <div className={`reveal delay-1 ${styles.right}`}>
          {points.map((p) => (
            <div key={p.num} className={styles.point}>
              <span className={styles.pointNum}>{p.num}</span>
              <p className={styles.pointText}>{p.text}</p>
            </div>
          ))}
          <p className={styles.conclusion}>Por isso montamos este guia.</p>
        </div>

      </div>
    </section>
  )
}
