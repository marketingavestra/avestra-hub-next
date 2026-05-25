import styles from './Marquee.module.css'

const items = [
  'Acesso 100% Gratuito',
  'Sem Cadastro',
  '30+ Ferramentas Curadas',
  'Copiloto Jurídico · R$27/mês',
  '6 Agentes de IA',
  'Case Memory por Processo',
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
