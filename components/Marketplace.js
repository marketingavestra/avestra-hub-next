import styles from './Marketplace.module.css'

const PLANS = [
  {
    tag: 'Começa aqui',
    name: 'Copiloto\nJurídico',
    desc: '6 agentes de IA em cadeia. Pesquisa, redação, contratos, prazos e honorários num ambiente só.',
    price: 'R$27',
    priceSub: 'por mês',
    items: ['6 agentes especializados', 'Case Memory por processo', 'Suporte por WhatsApp', 'Acesso imediato'],
    ctaLabel: 'Ativar o Copiloto',
    ctaStyle: 'primary',
    waMsg: 'Quero%20ativar%20o%20Copiloto%20Jur%C3%ADdico',
    highlight: false,
  },
  {
    tag: 'Melhor custo',
    badge: 'Mais popular',
    name: 'Copiloto\nAnual',
    desc: 'Tokens ilimitados, suporte prioritário e acesso antecipado a cada novo agente. Pra quem usa todo dia.',
    price: 'R$1.997',
    priceSub: 'pagamento único',
    items: ['Tudo do mensal', 'Tokens ilimitados', 'Suporte prioritário em 4h', 'Novos agentes em primeira mão'],
    ctaLabel: 'Quero o Anual',
    ctaStyle: 'accent',
    waMsg: 'Quero%20o%20Copiloto%20Anual',
    highlight: true,
  },
  {
    tag: 'Implementação',
    name: 'Mentoria\nDr. Wladmir',
    desc: 'Configuramos o Copiloto para o seu escritório. Mapeamos seus fluxos e ficamos 30 dias ao seu lado.',
    price: 'R$5.000',
    priceSub: 'vagas limitadas',
    items: ['Diagnóstico de fluxo', 'Configuração dos 6 agentes', '30 dias de acompanhamento', 'Acesso direto ao Dr. Wladmir'],
    ctaLabel: 'Quero a Mentoria',
    ctaStyle: 'primary',
    waMsg: 'Quero%20saber%20sobre%20a%20Mentoria',
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
          <span className="section-label">Copiloto Jurídico</span>
          <h2 className={styles.headline}>
            Tudo que você precisa
            <span className={`text-gradient ${styles.headlineLine}`}> para modernizar a operação do escritório</span>
          </h2>
          <p className={styles.sub}>
            Começa com o plano que faz sentido agora. Cresce quando precisar.
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
                Se nos primeiros 30 dias o Copiloto não funcionar para o seu escritório,
                devolvemos seu dinheiro. Sem perguntas.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
