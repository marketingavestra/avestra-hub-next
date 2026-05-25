import styles from './Marketplace.module.css'

const PLANS = [
  {
    tag: 'Mais popular',
    name: 'Skill\nSob Medida',
    desc: 'Agente de IA personalizado para a sua rotina. Feito à mão pela nossa equipe. Entrega em 48h.',
    price: 'R$27',
    priceSub: 'por skill / único',
    items: ['Agente personalizado', 'Entrega em 48h', '30 dias de suporte', 'Sem mensalidade'],
    ctaLabel: 'Quero minha Skill',
    ctaStyle: 'primary',
    waMsg: 'Quero%20uma%20Skill%20Sob%20Medida',
    highlight: false,
  },
  {
    tag: 'Melhor custo',
    badge: 'Economize R$14',
    name: 'Pack\n3 Skills',
    desc: 'Três agentes sob medida para diferentes áreas do seu escritório.',
    price: 'R$67',
    priceSub: 'R$22 cada',
    items: ['3 agentes personalizados', 'Entrega em 48h cada', '30 dias de suporte', 'Economize R$14'],
    ctaLabel: 'Quero o Pack',
    ctaStyle: 'accent',
    waMsg: 'Quero%20o%20Pack%203%20Skills',
    highlight: true,
  },
  {
    tag: 'Completo',
    name: 'Curso IA\nJurídica',
    desc: 'Do prompt básico à automação completa do escritório. 12 módulos. 8 horas de conteúdo.',
    price: 'R$297',
    priceSub: 'acesso vitalício',
    items: ['12 módulos práticos', '8h de conteúdo', 'Acesso vitalício', 'Certificado'],
    ctaLabel: 'Quero o Curso',
    ctaStyle: 'primary',
    waMsg: 'Quero%20o%20Curso%20IA%20Jur%C3%ADdica',
    highlight: false,
  },
]

function ShieldIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 2L3 7v5c0 5.25 3.75 10.15 9 11.25C17.25 22.15 21 17.25 21 12V7L12 2z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  )
}

export default function Marketplace() {
  return (
    <section id="ofertas" className={styles.section}>
      <div className={styles.inner}>

        <div className="reveal">
          <span className="section-label">Marketplace Jurídico</span>
          <h2 className={styles.headline}>
            Tudo que você precisa
            <span className={`text-gradient ${styles.headlineLine}`}> para dominar IA</span>
          </h2>
          <p className={styles.sub}>
            Skills, agentes e curso. Começa com o que faz mais sentido para a sua rotina.
          </p>
        </div>

        <div className={`reveal delay-1 ${styles.plans}`}>
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              className={`${styles.plan} ${plan.highlight ? styles.planHighlight : ''}`}
            >
              {plan.badge && (
                <div className={styles.planBadge}>{plan.badge}</div>
              )}
              <p className={styles.planTag}>{plan.tag}</p>
              <h3 className={styles.planName}>
                {plan.name.split('\n').map((line, i) => (
                  <span key={i}>
                    {line}
                    <br />
                  </span>
                ))}
              </h3>
              <p className={styles.planDesc}>{plan.desc}</p>
              <div className={styles.planPrice}>
                <span className={`text-gradient ${styles.planPriceNum}`}>{plan.price}</span>
                <span className={styles.planPriceSub}>{plan.priceSub}</span>
              </div>
              <ul className={styles.planItems}>
                {plan.items.map((item) => (
                  <li key={item}>
                    <span className={styles.check}>&#10003;</span>
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href={`https://wa.me/5511965817604?text=${plan.waMsg}`}
                target="_blank"
                rel="noopener noreferrer"
                className={
                  plan.ctaStyle === 'accent'
                    ? `btn-accent ${styles.planCta}`
                    : `btn-primary ${styles.planCta}`
                }
              >
                {plan.ctaLabel}
              </a>
            </div>
          ))}
        </div>

        <div className={`reveal delay-2 ${styles.guarantee}`}>
          <div className={styles.guaranteeSeal}>
            <span className={styles.guaranteeSealNum}>100%</span>
            <span className={styles.guaranteeSealLabel}>Garantido</span>
          </div>
          <div className={styles.guaranteeBox}>
            <div className={styles.guaranteeIcon}>
              <ShieldIcon />
            </div>
            <div>
              <p className={styles.guaranteeTitle}>Garantia Risco Zero</p>
              <p className={styles.guaranteeText}>
                O risco é todo nosso. Não seu.
                Se não ficar satisfeito, <strong>refazemos gratuitamente</strong>. Você tem 30 dias de suporte
                para ajustes. Se mesmo assim não servir, devolvemos seu dinheiro. Sem perguntas.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
