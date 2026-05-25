import styles from './Skills.module.css'

const STEPS = [
  {
    num: '01',
    title: 'Descreva sua necessidade',
    desc: 'Nos conta qual tarefa repetitiva você quer automatizar. Pode ser por WhatsApp.',
  },
  {
    num: '02',
    title: 'Construímos seu agente',
    desc: 'Nossa equipe cria e treina um agente de IA específico para a sua demanda. Feito à mão.',
  },
  {
    num: '03',
    title: 'Receba em 48 horas',
    desc: 'Agente pronto para usar no ChatGPT, Claude ou WhatsApp. Sem configuração da sua parte.',
  },
]

const SKILL_CARDS = [
  {
    abbr: 'AC',
    name: 'Análise de Contratos',
    desc: 'Revisão completa com checklist automático de cláusulas, riscos e sugestões de melhoria.',
    waMsgRaw: 'Quero%20a%20skill%20de%20An%C3%A1lise%20de%20Contratos',
  },
  {
    abbr: 'PJ',
    name: 'Pesquisa Jurisprudencial',
    desc: 'Busca, organiza e resume jurisprudência relevante com argumentação estruturada.',
    waMsgRaw: 'Quero%20a%20skill%20de%20Pesquisa%20Jurisprudencial',
  },
  {
    abbr: 'RP',
    name: 'Redação de Peças',
    desc: 'Gera estrutura, argumentação e revisão final de peças processuais completas.',
    waMsgRaw: 'Quero%20a%20skill%20de%20Reda%C3%A7%C3%A3o%20de%20Pe%C3%A7as',
  },
  {
    abbr: 'PC',
    name: 'Propostas Comerciais',
    desc: 'Gera proposta personalizada a partir do nome do lead e tipo de demanda.',
    waMsgRaw: 'Quero%20a%20skill%20de%20Propostas%20Comerciais',
  },
  {
    abbr: 'QL',
    name: 'Qualificação de Leads',
    desc: 'Triagem automática de potenciais clientes com score e priorização.',
    waMsgRaw: 'Quero%20a%20skill%20de%20Qualifica%C3%A7%C3%A3o%20de%20Leads',
  },
  {
    abbr: 'SD',
    name: 'SDR no WhatsApp',
    desc: 'Responde dúvidas iniciais, qualifica e agenda reuniões automaticamente.',
    waMsgRaw: 'Quero%20a%20skill%20de%20SDR%20no%20WhatsApp',
  },
]

const BENEFITS = [
  { title: 'Entrega em 48 horas', sub: 'Sem esperar semanas.' },
  { title: 'Sem mensalidade', sub: 'Pague uma vez, use para sempre.' },
  { title: 'Feito para você', sub: 'Treinado para a sua rotina específica.' },
  { title: '30 dias de suporte', sub: 'Ajustes e calibragem incluídos.' },
]

export default function Skills() {
  return (
    <section id="skills" className={styles.section}>
      <div className={styles.inner}>

        <div className="reveal">
          <span className="section-label">Skills Sob Medida — R$27</span>
          <h2 className={styles.headline}>
            Seu agente de IA
            <span className={`text-gradient ${styles.headlineLine}`}> personalizado</span>
            <br />
            para seu escritório
          </h2>
          <p className={styles.sub}>
            Diga o que precisa. Em 48h entregamos um agente treinado que faz o trabalho por você.
            Sem mensalidade. Sem configuração.
          </p>
        </div>

        <div className={`reveal delay-1 ${styles.steps}`}>
          {STEPS.map((s) => (
            <div key={s.num} className={styles.step}>
              <div className={styles.stepNum}>{s.num}</div>
              <p className={styles.stepTitle}>{s.title}</p>
              <p className={styles.stepDesc}>{s.desc}</p>
            </div>
          ))}
        </div>

        <div className={`reveal delay-2 ${styles.grid}`}>
          {SKILL_CARDS.map((sk) => (
            <div key={sk.name} className={styles.card}>
              <div className={styles.cardIcon}>
                <span className={styles.cardAbbr}>{sk.abbr}</span>
              </div>
              <p className={styles.cardName}>{sk.name}</p>
              <p className={styles.cardDesc}>{sk.desc}</p>
              <div className={styles.cardFooter}>
                <span className={styles.cardPrice}>R$27</span>
                <a
                  href={`https://wa.me/5511965817604?text=${sk.waMsgRaw}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.cardBtn}
                >
                  Adquirir
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className={`reveal delay-3 ${styles.benefits}`}>
          {BENEFITS.map((b) => (
            <div key={b.title} className={styles.benefit}>
              <span className={styles.benefitCheck}>&#10003;</span>
              <div>
                <strong className={styles.benefitTitle}>{b.title}</strong>
                <p className={styles.benefitSub}>{b.sub}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={`reveal delay-3 ${styles.ctaGroup}`}>
          <a
            href="https://wa.me/5511965817604?text=Quero%20uma%20Skill%20Sob%20Medida"
            target="_blank"
            rel="noopener noreferrer"
            className={`btn-accent ${styles.ctaBtn}`}
          >
            Quero minha Skill por R$27
          </a>
          <p className={styles.ctaNote}>
            Pagamento seguro &middot; Entrega em 48h &middot; Garantia total
          </p>
        </div>

      </div>
    </section>
  )
}
