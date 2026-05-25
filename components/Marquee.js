import styles from './Marquee.module.css'

const items = [
  'Acesso 100% Gratuito',
  'Sem Cadastro',
  '30+ Ferramentas Curadas',
  'Skills a partir de R$27',
  'Agentes Personalizados',
  'Curso Completo por R$297',
]

export default function Marquee() {
  const repeated = [...items, ...items, ...items, ...items]

  return (
    <div className={styles.wrapper}>
      <div className={styles.track}>
        {repeated.map((item, i) => (
          <span key={i} className={styles.item}>
            {item}
            <span className={styles.sep} aria-hidden="true" />
          </span>
        ))}
      </div>
    </div>
  )
}
