/* ─────────────────────────────────────────────────────
   TOOLS CARD DATA — campos leves para o grid
   Conteúdo rico (overview, howToUse, tips, etc.)
   está em tools-detail.js — importado dinamicamente
   ───────────────────────────────────────────────────── */

function logo(domain) {
  return `https://www.google.com/s2/favicons?domain=${domain}&sz=64`
}

function shot(url) {
  return `https://api.microlink.io/?url=${encodeURIComponent(url)}&screenshot=true&meta=false&embed=screenshot.url`
}

export const TOOLS = [

  /* ══════════════════════════════════════
     GENERALISTAS
     ══════════════════════════════════════ */
  {
    abbr: 'GPT', logoUrl: logo('openai.com'), logoBg: '#fff',
    name: 'ChatGPT Business', stars: 5, badge: 'Pago', badgeType: 'paid',
    desc: 'Workspace colaborativo com GPT-4o. Projetos com memória, conexão com Drive, Slack e 60+ apps. O assistente mais usado no mundo.',
    tags: ['Produtividade', 'Redação', 'Agentes'],
    price: 'US$ 25/usuário/mês', url: 'https://openai.com/chatgpt/team',
    category: 'Generalistas', saves: 2341, views: 18900,
    gradient: 'linear-gradient(135deg, #10a37f 0%, #065f46 100%)', featured: true,
    screenshotUrl: shot('https://openai.com/chatgpt/team'),
  },

  {
    abbr: 'CLA', logoUrl: logo('anthropic.com'), logoBg: '#1a1a1a',
    name: 'Claude for Work', stars: 5, badge: 'Enterprise', badgeType: 'enterprise',
    desc: 'Melhor IA para redação longa, análise de contratos e síntese de documentos. Dados não usados para treino.',
    tags: ['Redação', 'Contratos', 'Análise'],
    price: 'Comercial por assento', url: 'https://www.anthropic.com/claude',
    category: 'Generalistas', saves: 1875, views: 14200,
    gradient: 'linear-gradient(135deg, #7c3aed 0%, #4c1d95 100%)', featured: true,
    screenshotUrl: shot('https://www.anthropic.com/claude'),
  },

  {
    abbr: 'GEM', logoUrl: logo('gemini.google.com'), logoBg: '#fff',
    name: 'Gemini Advanced', stars: 4, badge: 'Pago', badgeType: 'paid',
    desc: 'IA do Google integrada ao Workspace. Resumos de e-mail, rascunhos no Docs e análise de planilhas em tempo real.',
    tags: ['Google Workspace', 'Docs', 'Gmail'],
    price: 'US$ 20/mês', url: 'https://gemini.google.com',
    category: 'Generalistas', saves: 1102, views: 9800,
    gradient: 'linear-gradient(135deg, #4285f4 0%, #0d47a1 100%)', featured: false,
    screenshotUrl: shot('https://gemini.google.com'),
  },

  {
    abbr: 'NTN', logoUrl: logo('notion.so'), logoBg: '#fff',
    name: 'Notion AI', stars: 4, badge: 'Freemium', badgeType: 'freemium',
    desc: 'Meeting Notes automáticas, Research Mode e agentes de IA embutidos. Base de conhecimento do escritório com IA.',
    tags: ['Documentação', 'Knowledge Base', 'Reuniões'],
    price: 'Incluído nos planos Business', url: 'https://www.notion.so/product/ai',
    category: 'Generalistas', saves: 980, views: 7600,
    gradient: 'linear-gradient(135deg, #374151 0%, #111827 100%)', featured: false,
    screenshotUrl: shot('https://www.notion.so/product/ai'),
  },

  /* ══════════════════════════════════════
     PESQUISA JURÍDICA
     ══════════════════════════════════════ */
  {
    abbr: 'JUS', logoUrl: logo('jusbrasil.com.br'), logoBg: '#fff',
    name: 'JusBrasil Pro', stars: 5, badge: 'Freemium', badgeType: 'freemium',
    desc: 'Maior base de jurisprudência do Brasil com busca semântica por IA. Resume decisões e envia alertas processuais automáticos.',
    tags: ['Jurisprudência', 'Alertas', 'STJ', 'STF'],
    price: 'A partir de R$ 55/mês', url: 'https://www.jusbrasil.com.br',
    category: 'Pesquisa Jurídica', saves: 3120, views: 24500,
    gradient: 'linear-gradient(135deg, #dc2626 0%, #7f1d1d 100%)', featured: true,
    screenshotUrl: shot('https://www.jusbrasil.com.br'),
  },

  {
    abbr: 'HRV', logoUrl: logo('harvey.ai'), logoBg: '#0a0a0a',
    name: 'Harvey AI', stars: 5, badge: 'Enterprise', badgeType: 'enterprise',
    desc: 'IA treinada exclusivamente para o Direito. Usado por Allen & Overy e grandes bancas. Pesquisa profunda, redação e análise de risco.',
    tags: ['LLM Jurídico', 'Big Law', 'Enterprise'],
    price: 'Enterprise · sob consulta', url: 'https://www.harvey.ai',
    category: 'Pesquisa Jurídica', saves: 2200, views: 19100,
    gradient: 'linear-gradient(135deg, #1e40af 0%, #0f172a 100%)', featured: true,
    screenshotUrl: shot('https://www.harvey.ai'),
  },

  {
    abbr: 'LEX', logoUrl: logo('lexmachina.com'), logoBg: '#fff',
    name: 'Lex Machina', stars: 4, badge: 'Pago', badgeType: 'paid',
    desc: 'Análise preditiva de litígios com dados históricos de tribunais. Identifica padrões de decisão por juiz e vara.',
    tags: ['Jurimetria', 'Litígio', 'Previsão'],
    price: 'Sob consulta', url: 'https://lexmachina.com',
    category: 'Pesquisa Jurídica', saves: 890, views: 6700,
    gradient: 'linear-gradient(135deg, #0891b2 0%, #164e63 100%)', featured: false,
    screenshotUrl: shot('https://lexmachina.com'),
  },

  {
    abbr: 'CAS', logoUrl: logo('casetext.com'), logoBg: '#fff',
    name: 'Casetext CoCounsel', stars: 5, badge: 'Pago', badgeType: 'paid',
    desc: 'Assistente jurídico por IA que pesquisa casos, analisa documentos e prepara memorandos em minutos.',
    tags: ['Pesquisa', 'Memorandos', 'Análise'],
    price: 'US$ 150/mês', url: 'https://casetext.com',
    category: 'Pesquisa Jurídica', saves: 1450, views: 11200,
    gradient: 'linear-gradient(135deg, #0d9488 0%, #134e4a 100%)', featured: false,
    screenshotUrl: shot('https://casetext.com'),
  },

  /* ══════════════════════════════════════
     REDAÇÃO DE PEÇAS
     ══════════════════════════════════════ */
  {
    abbr: 'SPB', logoUrl: logo('spellbook.legal'), logoBg: '#fff',
    name: 'Spellbook', stars: 4, badge: 'Pago', badgeType: 'paid',
    desc: 'IA para redação de contratos direto no Word. Sugere cláusulas, detecta riscos e compara com padrões de mercado.',
    tags: ['Word', 'Cláusulas', 'Contratos'],
    price: 'US$ 99/mês', url: 'https://www.spellbook.legal',
    category: 'Redação de Peças', saves: 1320, views: 10400,
    gradient: 'linear-gradient(135deg, #7c3aed 0%, #312e81 100%)', featured: false,
    screenshotUrl: shot('https://www.spellbook.legal'),
  },

  {
    abbr: 'DOC', logoUrl: logo('docusign.com'), logoBg: '#fff',
    name: 'DocuSign AI', stars: 4, badge: 'Pago', badgeType: 'paid',
    desc: 'Extrai obrigações e riscos de contratos com IA. Acelera a due diligence e identifica cláusulas problemáticas.',
    tags: ['Due Diligence', 'Contratos', 'Extração'],
    price: 'A partir de US$ 45/mês', url: 'https://www.docusign.com',
    category: 'Redação de Peças', saves: 760, views: 5900,
    gradient: 'linear-gradient(135deg, #2563eb 0%, #1e3a8a 100%)', featured: false,
    screenshotUrl: shot('https://www.docusign.com'),
  },

  /* ══════════════════════════════════════
     GESTÃO DE ESCRITÓRIO
     ══════════════════════════════════════ */
  {
    abbr: 'AST', logoUrl: logo('astrea.net.br'), logoBg: '#fff',
    name: 'Astrea / Aurum', stars: 4, badge: 'Freemium', badgeType: 'freemium',
    desc: 'Gestão processual brasileira com IA. Acompanha prazos, movimentações e indicadores do escritório em tempo real.',
    tags: ['Gestão', 'Prazos', 'Brasil', 'Analytics'],
    price: 'A partir de R$ 89/mês', url: 'https://astrea.net.br',
    category: 'Gestão de Escritório', saves: 2670, views: 21000,
    gradient: 'linear-gradient(135deg, #0284c7 0%, #075985 100%)', featured: true,
    screenshotUrl: shot('https://astrea.net.br'),
  },

  {
    abbr: 'ADV', logoUrl: logo('advbox.com.br'), logoBg: '#fff',
    name: 'AdvBox', stars: 4, badge: 'Pago', badgeType: 'paid',
    desc: 'Software jurídico completo com CRM para escritórios. Gestão de processos, financeiro e relacionamento com clientes.',
    tags: ['CRM', 'Processos', 'Financeiro'],
    price: 'A partir de R$ 139/mês', url: 'https://www.advbox.com.br',
    category: 'Gestão de Escritório', saves: 1890, views: 14800,
    gradient: 'linear-gradient(135deg, #16a34a 0%, #14532d 100%)', featured: false,
    screenshotUrl: shot('https://www.advbox.com.br'),
  },

  {
    abbr: 'TIM', logoUrl: logo('toggl.com'), logoBg: '#fff',
    name: 'Toggl Track', stars: 4, badge: 'Freemium', badgeType: 'freemium',
    desc: 'Controle de horas por cliente e processo. Geração automática de relatórios para cobrança de honorários.',
    tags: ['Horas', 'Honorários', 'Relatórios'],
    price: 'Grátis até 5 usuários', url: 'https://toggl.com/track',
    category: 'Gestão de Escritório', saves: 730, views: 5600,
    gradient: 'linear-gradient(135deg, #e11d48 0%, #881337 100%)', featured: false,
    screenshotUrl: shot('https://toggl.com/track'),
  },

  /* ══════════════════════════════════════
     AUTOMAÇÃO
     ══════════════════════════════════════ */
  {
    abbr: 'ZAP', logoUrl: logo('zapier.com'), logoBg: '#fff',
    name: 'Zapier AI', stars: 5, badge: 'Freemium', badgeType: 'freemium',
    desc: '7.000+ integrações com IA. Cria automações por texto natural. Conecta e-mail, CRM, calendário e sistemas jurídicos.',
    tags: ['Integrações', 'No-Code', 'AI Actions'],
    price: 'Grátis até 100 tasks/mês', url: 'https://zapier.com',
    category: 'Automação', saves: 3450, views: 27800,
    gradient: 'linear-gradient(135deg, #f97316 0%, #7c2d12 100%)', featured: true,
    screenshotUrl: shot('https://zapier.com'),
  },

  {
    abbr: 'MKE', logoUrl: logo('make.com'), logoBg: '#fff',
    name: 'Make (Integromat)', stars: 5, badge: 'Freemium', badgeType: 'freemium',
    desc: 'Automação visual com cenários complexos. Ideal para fluxos jurídicos com condicionais, loops e tratamento de erros.',
    tags: ['Visual', 'Cenários', 'APIs'],
    price: 'Grátis até 1.000 ops/mês', url: 'https://www.make.com',
    category: 'Automação', saves: 2180, views: 17300,
    gradient: 'linear-gradient(135deg, #6d28d9 0%, #2e1065 100%)', featured: false,
    screenshotUrl: shot('https://www.make.com'),
  },

  {
    abbr: 'N8N', logoUrl: logo('n8n.io'), logoBg: '#fff',
    name: 'n8n', stars: 5, badge: 'Freemium', badgeType: 'freemium',
    desc: 'Automação self-hosted com 400+ integrações. Total controle dos dados. Ideal para escritórios com equipe técnica.',
    tags: ['Self-hosted', 'Webhooks', 'Open Source'],
    price: 'Grátis (self-host)', url: 'https://n8n.io',
    category: 'Automação', saves: 1960, views: 15400,
    gradient: 'linear-gradient(135deg, #ea580c 0%, #431407 100%)', featured: false,
    screenshotUrl: shot('https://n8n.io'),
  },

  /* ══════════════════════════════════════
     JURIMETRIA
     ══════════════════════════════════════ */
  {
    abbr: 'PRD', logoUrl: logo('predi.legal'), logoBg: '#0f766e',
    name: 'Predi.legal', stars: 4, badge: 'Pago', badgeType: 'paid',
    desc: 'Plataforma brasileira de jurimetria. Analisa probabilidade de êxito por vara, juiz e tipo de ação.',
    tags: ['Jurimetria', 'Brasil', 'Prognóstico'],
    price: 'Sob consulta', url: 'https://predi.legal',
    category: 'Jurimetria', saves: 1540, views: 12200,
    gradient: 'linear-gradient(135deg, #0f766e 0%, #042f2e 100%)', featured: true,
    screenshotUrl: shot('https://predi.legal'),
  },

  {
    abbr: 'ELC', logoUrl: '', logoBg: '#1d4ed8',
    name: 'Elcvia Analytics', stars: 4, badge: 'Pago', badgeType: 'paid',
    desc: 'Dashboard de jurimetria para advocacia empresarial. Cruza dados de TJ, TRF e TRT em uma interface unificada.',
    tags: ['Dashboard', 'Analytics', 'TJ/TRF'],
    price: 'A partir de R$ 350/mês', url: '#',
    category: 'Jurimetria', saves: 680, views: 5100,
    gradient: 'linear-gradient(135deg, #1d4ed8 0%, #1e3a8a 100%)', featured: false,
    screenshotUrl: null,
  },
]
