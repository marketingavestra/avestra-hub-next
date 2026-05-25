/* ─────────────────────────────────────────────────────
   TOOLS DATA — Hub Central Jurídico
   Cada ferramenta tem: dados básicos + conteúdo rico
   (howToUse, tips, prompts, pricing, alternatives)
   ───────────────────────────────────────────────────── */

function logo(domain) {
  return `https://www.google.com/s2/favicons?domain=${domain}&sz=64`
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

    overview: `ChatGPT Business é o ambiente de trabalho colaborativo da OpenAI. Diferente da versão gratuita, ele oferece memória persistente por projeto, não usa seus dados para treinar os modelos, e integra com mais de 60 aplicativos via Actions.\n\nPara advogados, o diferencial está nos Projetos: você cria um projeto por área do escritório (trabalhista, cível, criminal), sobe documentos relevantes e o GPT aprende o contexto daquele caso. Cada conversa dentro do projeto herda esse conhecimento.`,

    howToUse: [
      { step: 1, title: 'Crie um Projeto por área', desc: 'Vá em "Projetos" e crie um para cada área do escritório. Ex: "Trabalhista", "Contratos", "Prazos". Suba modelos de peças, teses e precedentes relevantes.' },
      { step: 2, title: 'Configure instruções personalizadas', desc: 'Em Configurações > Instruções Personalizadas, defina: "Você é um assistente jurídico. Sempre cite fundamento legal. Nunca invente jurisprudência." Isso vale para todas as conversas.' },
      { step: 3, title: 'Use o modo Pesquisa para jurisprudência', desc: 'Ative "Pesquisar na Web" para buscar decisões recentes. Sempre peça para citar a fonte: "Busque decisões do STJ sobre [tema] em 2024 e cite o número do acórdão."' },
      { step: 4, title: 'Integre com Google Drive', desc: 'Conecte seu Drive nas Configurações. Você pode pedir ao GPT para analisar contratos diretamente: "Analise o contrato em [link] e liste cláusulas de risco."' },
    ],

    tips: [
      { icon: '⚠️', title: 'Nunca confie em jurisprudência sem verificar', desc: 'O GPT pode alucinar números de acórdãos. Use-o para redigir, estruturar e argumentar — mas sempre verifique a jurisprudência no JusBrasil ou no STJ/STF diretamente.' },
      { icon: '🎯', title: 'Seja específico no contexto', desc: 'Ruim: "Redija uma petição". Bom: "Redija uma petição inicial de ação trabalhista por horas extras não pagas, foro: TRT-2, réu é empresa do varejo com 200 funcionários."' },
      { icon: '🔁', title: 'Use a função Memória', desc: 'Ative a Memória nas configurações. O GPT vai lembrar suas preferências de estilo de redação, modelos favoritos e áreas de atuação — sem você precisar repetir em cada conversa.' },
      { icon: '📋', title: 'Crie GPTs personalizados por tipo de peça', desc: 'Em "Meus GPTs" crie um GPT para cada tipo de peça: um para petições iniciais, um para recursos, um para contratos. Cada um com suas instruções e documentos de referência.' },
    ],

    prompts: [
      { label: 'Petição Inicial Trabalhista', text: 'Você é um advogado trabalhista sênior. Redija uma petição inicial de ação trabalhista com pedido de horas extras não pagas, adicional noturno e FGTS. Autor: [nome], réu: [empresa], CTPS: [data admissão] a [data demissão], cargo: [cargo], salário: R$[valor].' },
      { label: 'Análise de Cláusulas de Risco', text: 'Analise o contrato a seguir e identifique: (1) cláusulas abusivas ou leoninas, (2) ausência de cláusulas essenciais, (3) riscos para meu cliente. Seja objetivo e use bullets. Contrato: [cole aqui]' },
      { label: 'Resumo de Acórdão', text: 'Resuma o acórdão a seguir em no máximo 5 bullets. Inclua: tribunal, relator, tese central, resultado e aplicabilidade prática para casos similares. Acórdão: [cole aqui]' },
      { label: 'Resposta a Contestação', text: 'Com base na contestação abaixo, elabore uma réplica destacando os pontos controvertidos e reforçando os argumentos do autor. Use linguagem jurídica formal. Contestação: [cole aqui]' },
    ],

    pricing: {
      plans: [
        { name: 'Free', price: 'Grátis', highlight: false, features: ['GPT-4o mini', 'Sem memória de projetos', 'Limitado a 40 msg/dia'] },
        { name: 'Plus', price: 'US$ 20/mês', highlight: false, features: ['GPT-4o completo', 'Memória ativa', 'GPTs personalizados'] },
        { name: 'Business', price: 'US$ 25/usuário/mês', highlight: true, features: ['Tudo do Plus', 'Sem uso para treino de IA', 'Projetos com memória', 'Admin console', 'SSO e permissões'] },
      ]
    },

    alternatives: ['Claude for Work', 'Gemini Advanced', 'Notion AI'],
  },

  {
    abbr: 'CLA', logoUrl: logo('anthropic.com'), logoBg: '#1a1a1a',
    name: 'Claude for Work', stars: 5, badge: 'Enterprise', badgeType: 'enterprise',
    desc: 'Melhor IA para redação longa, análise de contratos e síntese de documentos. Dados não usados para treino.',
    tags: ['Redação', 'Contratos', 'Análise'],
    price: 'Comercial por assento', url: 'https://www.anthropic.com/claude',
    category: 'Generalistas', saves: 1875, views: 14200,
    gradient: 'linear-gradient(135deg, #7c3aed 0%, #4c1d95 100%)', featured: true,

    overview: `Claude (Anthropic) é reconhecido como o melhor modelo para leitura e análise de documentos longos. Ele aceita até 200.000 tokens de contexto — equivalente a um livro inteiro ou dezenas de contratos simultaneamente.\n\nPara escritórios jurídicos, o ponto forte é a análise contratual: você sobe um contrato de 100 páginas e o Claude lê tudo, identifica riscos, compara cláusulas e sugere alterações com precisão cirúrgica. Ele também é mais conservador que o GPT — raramente alucina.`,

    howToUse: [
      { step: 1, title: 'Upload de documentos direto no chat', desc: 'Claude aceita PDFs, Word e TXT. Arraste o contrato ou processo direto na conversa. Você pode subir múltiplos documentos e pedir análise comparativa.' },
      { step: 2, title: 'Defina o papel antes de começar', desc: 'Comece sempre com: "Você é um advogado especializado em [área]. Analise com rigor técnico e aponte apenas o que estiver fundamentado em lei ou jurisprudência consolidada."' },
      { step: 3, title: 'Use Projects para manter contexto', desc: 'No Claude for Work, crie um Project por cliente ou caso. O Claude mantém o histórico e os documentos de referência entre conversas.' },
      { step: 4, title: 'Peça revisão em etapas', desc: 'Para peças longas, divida em etapas: primeiro a estrutura, depois cada tópico. Claude produz textos mais coerentes quando você valida cada parte.' },
    ],

    tips: [
      { icon: '📄', title: 'Melhor que GPT para documentos longos', desc: 'Contratos de 50+ páginas? Use Claude. Ele lê o documento inteiro de uma vez sem perder contexto. O GPT tende a "esquecer" o início de documentos muito longos.' },
      { icon: '🛡️', title: 'Zero alucinação em fatos documentados', desc: 'Claude é mais cauteloso: quando não sabe algo, diz que não sabe. Para jurisprudência, peça sempre para basear-se apenas nos documentos que você subiu.' },
      { icon: '✍️', title: 'Redação com voz consistente', desc: 'Claude mantém o estilo de escrita com mais consistência que outros modelos. Se você subir 3 peças suas como referência, ele vai replicar seu estilo de forma muito fiel.' },
      { icon: '🔒', title: 'Dados não viram treino', desc: 'No plano Enterprise, os documentos do escritório não são usados para treinar a IA. Crucial para confidencialidade de clientes.' },
    ],

    prompts: [
      { label: 'Análise Completa de Contrato', text: 'Analise o contrato anexo e responda em seções: (1) Partes e objeto, (2) Obrigações principais de cada parte, (3) Cláusulas de risco para meu cliente, (4) Cláusulas ausentes que deveriam constar, (5) Recomendações de negociação. Meu cliente é: [comprador/vendedor/locatário/etc]' },
      { label: 'Due Diligence Contratual', text: 'Faça due diligence dos contratos anexos. Liste: vícios formais, cláusulas conflitantes entre si, riscos regulatórios, passivos ocultos potenciais. Classifique cada item como: alto, médio ou baixo risco.' },
      { label: 'Redação Estilo Próprio', text: 'A seguir estão exemplos de peças que escrevi. Analise meu estilo de redação jurídica (estrutura, tom, vocabulário) e use esse padrão para redigir: [tipo de peça] sobre [tema]. [Cole suas peças de referência]' },
    ],

    pricing: {
      plans: [
        { name: 'Claude.ai Pro', price: 'US$ 20/mês', highlight: false, features: ['Claude 3.7 Sonnet', 'Upload de documentos', '5x mais uso que gratuito'] },
        { name: 'Claude for Work', price: 'Comercial (por assento)', highlight: true, features: ['Todos os modelos', 'Sem uso para treino', 'Projects compartilhados', 'SSO', 'Controle de dados'] },
      ]
    },

    alternatives: ['ChatGPT Business', 'Gemini Advanced'],
  },

  {
    abbr: 'GEM', logoUrl: logo('gemini.google.com'), logoBg: '#fff',
    name: 'Gemini Advanced', stars: 4, badge: 'Pago', badgeType: 'paid',
    desc: 'IA do Google integrada ao Workspace. Resumos de e-mail, rascunhos no Docs e análise de planilhas em tempo real.',
    tags: ['Google Workspace', 'Docs', 'Gmail'],
    price: 'US$ 20/mês', url: 'https://gemini.google.com',
    category: 'Generalistas', saves: 1102, views: 9800,
    gradient: 'linear-gradient(135deg, #4285f4 0%, #0d47a1 100%)', featured: false,

    overview: `Gemini Advanced é a aposta do Google para quem já vive dentro do Workspace. A grande vantagem é a integração nativa: o Gemini aparece dentro do Gmail, Docs, Sheets e Meet — sem precisar abrir outra aba.\n\nPara advogados que já usam Google Drive para documentos, é o menor esforço para começar com IA. Você pode pedir ao Gemini para resumir uma thread de e-mails com um cliente, redigir uma resposta formal ou analisar uma planilha de honorários.`,

    howToUse: [
      { step: 1, title: 'Ative no Google Workspace', desc: 'Se seu escritório usa Google Workspace Business, o Gemini pode já estar disponível. Vá em gemini.google.com e faça login com a conta corporativa.' },
      { step: 2, title: 'Use direto no Gmail', desc: 'No Gmail, clique no ícone do Gemini na barra lateral. Você pode pedir: "Resuma essa thread", "Rascunhe uma resposta formal", "Liste os compromissos mencionados nesse e-mail".' },
      { step: 3, title: 'Redação no Google Docs', desc: 'No Docs, use "Me ajude a escrever" para gerar rascunhos. Para contratos: "Crie um modelo de contrato de honorários para advocacia trabalhista com cláusula de êxito."' },
      { step: 4, title: 'Análise de planilhas no Sheets', desc: 'No Sheets, o Gemini pode analisar dados de processos, calcular métricas e gerar gráficos: "Qual é a taxa de êxito por tipo de ação nessa planilha?"' },
    ],

    tips: [
      { icon: '📧', title: 'Melhor uso: triagem de e-mails', desc: 'O maior ganho de tempo para advogados é na gestão de e-mails. Use o Gemini no Gmail para resumir threads longas e priorizar o que precisa de resposta urgente.' },
      { icon: '🔗', title: 'Integração com Google Drive', desc: 'Gemini acessa seus arquivos no Drive. Você pode pedir: "Analise os contratos da pasta /Clientes/2024 e liste os que vencem este mês."' },
      { icon: '⚡', title: 'Geração de minutas rápidas', desc: 'Para minutas simples e padrão, o Gemini no Docs é mais rápido que abrir outra aba. Ideal para e-mails de notificação extrajudicial, cartas e comunicados.' },
    ],

    prompts: [
      { label: 'Resumo de Thread de E-mail', text: 'Resuma essa conversa de e-mail em: (1) assunto principal, (2) pontos de acordo, (3) pontos pendentes, (4) próximas ações necessárias. [Cole a thread]' },
      { label: 'Resposta Formal', text: 'Redija uma resposta formal e profissional ao e-mail abaixo. Tom: cordial mas firme. Objetivo: [seu objetivo]. E-mail recebido: [cole aqui]' },
    ],

    pricing: {
      plans: [
        { name: 'Gemini Free', price: 'Grátis', highlight: false, features: ['Gemini 1.5 Flash', 'Sem integração Workspace'] },
        { name: 'Gemini Advanced', price: 'US$ 20/mês', highlight: true, features: ['Gemini 1.5 Pro', 'Integração Gmail, Docs, Sheets', '1TB Google Drive', 'Deep Research'] },
      ]
    },

    alternatives: ['ChatGPT Business', 'Notion AI'],
  },

  {
    abbr: 'NTN', logoUrl: logo('notion.so'), logoBg: '#fff',
    name: 'Notion AI', stars: 4, badge: 'Freemium', badgeType: 'freemium',
    desc: 'Meeting Notes automáticas, Research Mode e agentes de IA embutidos. Base de conhecimento do escritório com IA.',
    tags: ['Documentação', 'Knowledge Base', 'Reuniões'],
    price: 'Incluído nos planos Business', url: 'https://www.notion.so/product/ai',
    category: 'Generalistas', saves: 980, views: 7600,
    gradient: 'linear-gradient(135deg, #374151 0%, #111827 100%)', featured: false,

    overview: `Notion AI transforma o Notion em uma base de conhecimento viva do escritório. A IA está embutida em cada página: você escreve, ela complementa, resume, traduz e busca informações por toda a sua base.\n\nPara escritórios, o uso mais poderoso é criar um banco de modelos de peças e SOPs (procedimentos operacionais). O Notion AI ajuda a manter tudo atualizado, busca precedentes internos e resume reuniões automaticamente com a integração de calendário.`,

    howToUse: [
      { step: 1, title: 'Crie uma base de modelos de peças', desc: 'Crie uma database "Modelos" com templates de petições, contratos e notificações. A IA vai aprender com esse banco e sugerir o modelo correto quando você começar a escrever.' },
      { step: 2, title: 'Ative AI Meeting Notes', desc: 'Conecte seu Google Calendar. O Notion AI transcreve suas reuniões e gera automaticamente: resumo, decisões tomadas e próximas ações — organizados por cliente.' },
      { step: 3, title: 'Use o Research Mode', desc: 'Para pesquisa jurídica superficial ou contextual, use o Research Mode: "Explique o marco legal de [tema] no Brasil e cite as principais leis."' },
      { step: 4, title: 'Crie SOPs do escritório', desc: 'Documente os processos do escritório em páginas Notion com IA. Ex: "Protocolo de onboarding de novo cliente", "Checklist de audiência trabalhista".' },
    ],

    tips: [
      { icon: '📚', title: 'Base de conhecimento jurídico própria', desc: 'O maior valor do Notion AI é sobre seus próprios documentos. Quanto mais você documentar (teses, modelos, clientes), mais útil a IA fica — ela pesquisa dentro da SUA base.' },
      { icon: '🗂️', title: 'Organize por cliente + área', desc: 'Crie uma estrutura: /Clientes/[Nome]/[Processo]/. O Notion AI pode resumir tudo de um cliente e mostrar o histórico completo em segundos.' },
      { icon: '📅', title: 'Gestão de prazos visual', desc: 'Use a visão Calendário do Notion com campos de data de prazo. A IA pode te lembrar: "Você tem 3 prazos esta semana. O mais crítico é [processo] que vence em 2 dias."' },
    ],

    prompts: [
      { label: 'SOP de Onboarding', text: 'Crie um SOP (Procedimento Operacional Padrão) para onboarding de novo cliente em escritório de advocacia. Inclua: coleta de documentos, contrato de honorários, cadastro no sistema, primeira reunião.' },
      { label: 'Resumo de Reunião', text: 'Resuma as notas da reunião abaixo em: (1) contexto, (2) decisões tomadas, (3) próximas ações com responsável e prazo. Notas: [cole aqui]' },
    ],

    pricing: {
      plans: [
        { name: 'Free', price: 'Grátis', highlight: false, features: ['IA limitada a 20 respostas/mês'] },
        { name: 'Plus', price: 'US$ 12/mês + IA US$ 10', highlight: false, features: ['IA ilimitada', 'Upload de arquivos'] },
        { name: 'Business', price: 'US$ 18/mês (IA inclusa)', highlight: true, features: ['Tudo ilimitado', 'AI Meeting Notes', 'SAML SSO', 'Permissões avançadas'] },
      ]
    },

    alternatives: ['ChatGPT Business', 'Gemini Advanced'],
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

    overview: `JusBrasil é a maior plataforma jurídica do Brasil, com mais de 300 milhões de documentos indexados: STJ, STF, todos os TJs, TRFs e TRTs. A versão Pro adiciona busca semântica por IA — você descreve a situação com suas palavras e o sistema encontra a jurisprudência relevante.\n\nO diferencial operacional está nos alertas: você cadastra o número do processo e recebe notificação em tempo real a cada movimentação, sem precisar consultar manualmente.`,

    howToUse: [
      { step: 1, title: 'Configure alertas processuais', desc: 'Em "Meus Processos", adicione todos os processos ativos do escritório. Informe seu e-mail para alertas. Você vai receber notificação a cada movimentação — despacho, decisão, sentença.' },
      { step: 2, title: 'Use busca semântica, não só palavras-chave', desc: 'Em vez de buscar "horas extras", descreva o caso: "Bancário que trabalha em caixa eletrônico — enquadramento como caixa ou escriturário para fins de jornada." A IA encontra a jurisprudência relevante.' },
      { step: 3, title: 'Filtre por tribunal e período', desc: 'Depois de buscar, filtre por: STJ (para precedentes vinculantes), TRT da sua região, ano (2022+ para jurisprudência atual). Isso economiza tempo de triagem.' },
      { step: 4, title: 'Use o resumo automático de acórdãos', desc: 'Clique em qualquer decisão e use "Resumir com IA" para obter os pontos principais em segundos: tribunal, relator, tese, resultado.' },
    ],

    tips: [
      { icon: '🔍', title: 'Busque por situação, não por lei', desc: 'A busca semântica do JusBrasil é mais eficiente quando você descreve o problema real do cliente: "Médico plantonista — adicional noturno durante hora reduzida." O sistema encontra casos similares.' },
      { icon: '📩', title: 'Configure alertas para TODOS os processos', desc: 'O maior risco para advogados é perder prazos por não ver movimentações. Configure alerta para 100% dos processos ativos — é gratuito e pode evitar negligência processual.' },
      { icon: '⚡', title: 'Salve pesquisas como templates', desc: 'Para áreas que você atua recorrentemente, salve as buscas mais eficientes. Quando entrar um caso novo, execute o template e já tem a jurisprudência base em 30 segundos.' },
      { icon: '📊', title: 'Analise o perfil do juiz', desc: 'No JusBrasil Pro você consegue ver o histórico de decisões de juízes e desembargadores específicos. Antes de uma audiência, analise como aquele juiz decide em casos similares ao seu.' },
    ],

    prompts: [
      { label: 'Busca por Situação', text: 'Use no JusBrasil: "[descreva a situação do cliente em linguagem natural]". Exemplo: "Empregado demitido por justa causa durante auxílio doença — validade da demissão"' },
      { label: 'Análise de Decisão (via GPT)', text: 'Cole o acórdão encontrado no JusBrasil e peça ao ChatGPT: "Analise essa decisão e identifique: (1) tese jurídica central, (2) fundamentos legais, (3) aplicabilidade ao meu caso: [descreva seu caso]"' },
    ],

    pricing: {
      plans: [
        { name: 'Grátis', price: 'R$ 0', highlight: false, features: ['Busca básica', 'Alertas limitados', 'Acesso parcial'] },
        { name: 'Pro Básico', price: 'R$ 55/mês', highlight: false, features: ['Busca semântica IA', 'Alertas ilimitados', 'Todos os tribunais'] },
        { name: 'Pro Avançado', price: 'R$ 129/mês', highlight: true, features: ['Tudo do Básico', 'Análise de perfil de juízes', 'Relatórios', 'Multi-usuário'] },
      ]
    },

    alternatives: ['Harvey AI', 'Casetext CoCounsel', 'Copiloto Jurídico'],
  },

  {
    abbr: 'HRV', logoUrl: logo('harvey.ai'), logoBg: '#0a0a0a',
    name: 'Harvey AI', stars: 5, badge: 'Enterprise', badgeType: 'enterprise',
    desc: 'IA treinada exclusivamente para o Direito. Usado por Allen & Overy e grandes bancas. Pesquisa profunda, redação e análise de risco.',
    tags: ['LLM Jurídico', 'Big Law', 'Enterprise'],
    price: 'Enterprise — sob consulta', url: 'https://www.harvey.ai',
    category: 'Pesquisa Jurídica', saves: 2200, views: 19100,
    gradient: 'linear-gradient(135deg, #1e40af 0%, #0f172a 100%)', featured: true,

    overview: `Harvey é o LLM jurídico mais avançado do mundo. Treinado especificamente com legislação, contratos e decisões judiciais de múltiplas jurisdições. Usado por escritórios como Allen & Overy, Cleary Gottlieb e PwC Legal.\n\nNão é para todos: exige contrato Enterprise com valores não publicados. Mas para grandes escritórios ou corporações com alto volume de documentos jurídicos, o ROI é claro — pesquisa que levaria 8 horas é feita em 20 minutos.`,

    howToUse: [
      { step: 1, title: 'Solicitar demonstração', desc: 'Acesse harvey.ai e solicite uma demo. O processo inclui uma conversa com o time comercial para entender o volume de uso e definir o escopo do contrato.' },
      { step: 2, title: 'Configurar base de dados interna', desc: 'Harvey se conecta ao sistema de gestão documental do escritório (iManage, NetDocs) para ter acesso a precedentes internos e templates próprios.' },
      { step: 3, title: 'Pesquisa jurídica profunda', desc: 'Descreva o problema jurídico completo. Harvey analisa legislação aplicável, jurisprudência relevante e doutrina — com citações verificadas.' },
    ],

    tips: [
      { icon: '🏢', title: 'Ideal para grandes escritórios', desc: 'Harvey faz sentido para escritórios com 20+ advogados e alto volume de pesquisa e redação. Para solos e pequenos escritórios, ChatGPT Business + JusBrasil Pro é mais custo-eficiente.' },
      { icon: '🌍', title: 'Múltiplas jurisdições', desc: 'Ponto forte para escritórios com clientes internacionais. Harvey analisa contratos em inglês, espanhol e português com o mesmo nível de profundidade.' },
    ],

    prompts: [
      { label: 'Análise Multi-jurisdicional', text: 'Compare o tratamento jurídico de [tema] no Brasil e nos EUA. Liste: principais diferenças regulatórias, riscos para empresa multinacional, recomendações de compliance.' },
    ],

    pricing: {
      plans: [
        { name: 'Enterprise', price: 'Sob consulta', highlight: true, features: ['Contrato personalizado', 'Integração com sistemas do escritório', 'Treinamento customizado', 'SLA dedicado'] },
      ]
    },

    alternatives: ['ChatGPT Business', 'Claude for Work', 'Copiloto Jurídico'],
  },

  {
    abbr: 'LEX', logoUrl: logo('lexmachina.com'), logoBg: '#fff',
    name: 'Lex Machina', stars: 4, badge: 'Pago', badgeType: 'paid',
    desc: 'Análise preditiva de litígios com dados históricos de tribunais. Identifica padrões de decisão por juiz e vara.',
    tags: ['Jurimetria', 'Litígio', 'Previsão'],
    price: 'Sob consulta', url: 'https://lexmachina.com',
    category: 'Pesquisa Jurídica', saves: 890, views: 6700,
    gradient: 'linear-gradient(135deg, #0891b2 0%, #164e63 100%)', featured: false,

    overview: `Lex Machina é a plataforma de jurimetria da LexisNexis, focada nos tribunais federais americanos. Para advogados brasileiros, é relevante em casos com nexo com os EUA (arbitragem internacional, contratos bilaterais, propriedade intelectual).\n\nSeu ponto forte é o analytics de juízes: tempo médio para decisão, taxa de procedência por tipo de ação, advogados mais bem-sucedidos em casos similares.`,

    howToUse: [
      { step: 1, title: 'Pesquise por tribunal e tipo de caso', desc: 'Selecione o tribunal federal americano e o tipo de ação (patent, trademark, securities). O sistema mostra estatísticas históricas daquele tribunal.' },
      { step: 2, title: 'Analise o perfil do juiz', desc: 'Busque o juiz pelo nome e veja: taxa de procedência em casos similares, tempo médio de resolução, tendência para mediação.' },
      { step: 3, title: 'Compare estratégias de escritórios', desc: 'Veja quais escritórios têm maior taxa de sucesso em casos similares ao seu e quais argumentos usaram.' },
    ],

    tips: [
      { icon: '🇺🇸', title: 'Foco em tribunais federais dos EUA', desc: 'Lex Machina cobre tribunais federais americanos. Para jurimetria brasileira, use Predi.legal ou o perfil de juízes no JusBrasil Pro.' },
    ],

    prompts: [
      { label: 'Análise de Probabilidade', text: 'Antes de usar o Lex Machina, defina: tribunal alvo, tipo de ação, juiz (se já designado), valor da causa. Com isso, a plataforma gera probabilidade de êxito com base em histórico.' },
    ],

    pricing: {
      plans: [
        { name: 'Legal Analytics', price: 'Sob consulta', highlight: true, features: ['Acesso por módulo', 'Patent, Trademark, Securities, etc', 'Integração LexisNexis'] },
      ]
    },

    alternatives: ['Predi.legal', 'JusBrasil Pro'],
  },

  {
    abbr: 'CAS', logoUrl: logo('casetext.com'), logoBg: '#fff',
    name: 'Casetext CoCounsel', stars: 5, badge: 'Pago', badgeType: 'paid',
    desc: 'Assistente jurídico por IA que pesquisa casos, analisa documentos e prepara memorandos em minutos.',
    tags: ['Pesquisa', 'Memorandos', 'Análise'],
    price: 'US$ 150/mês', url: 'https://casetext.com',
    category: 'Pesquisa Jurídica', saves: 1450, views: 11200,
    gradient: 'linear-gradient(135deg, #0d9488 0%, #134e4a 100%)', featured: false,

    overview: `Casetext CoCounsel (adquirida pela Thomson Reuters) é uma das IAs jurídicas mais maduras do mercado americano. Ela faz pesquisa jurídica, análise de deposições, revisão de contratos e preparação de memorandos.\n\nPara advogados brasileiros, é mais relevante em contextos internacionais ou para escritórios que trabalham com law firms americanas.`,

    howToUse: [
      { step: 1, title: 'Pesquisa jurídica com linguagem natural', desc: 'Digite a questão jurídica completa. Ex: "What is the standard for piercing the corporate veil in California?" O sistema busca e cita casos relevantes.' },
      { step: 2, title: 'Análise de contratos', desc: 'Suba o contrato e defina o que buscar: "Identifique cláusulas de limitação de responsabilidade e compare com padrão de mercado."' },
      { step: 3, title: 'Deposition prep', desc: 'Suba transcrições de deposições e peça: "Identifique contradições nas declarações da testemunha sobre [tema]."' },
    ],

    tips: [
      { icon: '🇺🇸', title: 'Base americana (Westlaw integration)', desc: 'CoCounsel integra com Westlaw para pesquisa. Faz mais sentido para escritórios que já têm assinatura Thomson Reuters.' },
    ],

    prompts: [
      { label: 'Pesquisa de Case Law', text: 'Research the legal standard for [legal issue] in [jurisdiction]. Provide: leading cases, key holdings, trend in recent decisions (last 3 years).' },
    ],

    pricing: {
      plans: [
        { name: 'CoCounsel', price: 'US$ 150/mês', highlight: true, features: ['Pesquisa jurídica IA', 'Análise de contratos', 'Deposition prep', 'Integração Westlaw'] },
      ]
    },

    alternatives: ['Harvey AI', 'ChatGPT Business'],
  },

  /* ══════════════════════════════════════
     REDAÇÃO DE PEÇAS
     ══════════════════════════════════════ */
  {
    abbr: 'AVS', logoUrl: '', logoBg: '#f59e0b',
    name: 'Copiloto Jurídico', stars: 5, badge: 'Novo', badgeType: 'new',
    desc: 'Agente especializado da Avestra. Redige petições iniciais, recursos e pareceres com base no histórico do processo.',
    tags: ['Petições', 'Recursos', 'Case Memory'],
    price: 'R$ 27/mês', url: '#ofertas',
    category: 'Redação de Peças', saves: 4100, views: 31000,
    gradient: 'linear-gradient(135deg, #f59e0b 0%, #92400e 100%)', featured: true,

    overview: `O Copiloto Jurídico é o produto central da Avestra para advogados brasileiros. É um sistema de 6 agentes de IA em cadeia, cada um especializado em uma parte do fluxo jurídico.\n\nDiferente de usar o ChatGPT diretamente, o Copiloto tem memória de caso (Case Memory): ele sabe o histórico do processo, as partes envolvidas, as teses já usadas e os prazos ativos. Cada nova peça é redigida no contexto completo do processo, sem você precisar reexplicar tudo.`,

    howToUse: [
      { step: 1, title: 'Acesse com seu plano', desc: 'Com o plano mensal (R$27/mês), você acessa todos os 6 agentes via interface web. Não precisa instalar nada.' },
      { step: 2, title: 'Crie um caso', desc: 'Informe: partes (autor/réu), tipo de ação, vara/tribunal, datas relevantes. O Copiloto cria a "memória" daquele processo.' },
      { step: 3, title: 'Acione o agente certo', desc: 'Pesquisador → Jurisprudência. Redator → Petições. Editor → Contratos. Gerenciador → Prazos. Analista → Risco. Calculador → Honorários.' },
      { step: 4, title: 'Revise e assine', desc: 'O Copiloto gera a peça. Você revisa, ajusta e assina. O advogado sempre é o responsável técnico — a IA reduz o tempo de produção em até 70%.' },
    ],

    tips: [
      { icon: '🧠', title: 'A memória de caso é o diferencial', desc: 'Ao contrário do ChatGPT que esquece entre conversas, o Copiloto lembra de todo o histórico do processo. Na segunda petição, ele já sabe as teses da primeira.' },
      { icon: '⚖️', title: '6 agentes, 1 fluxo', desc: 'Pesquise → Redija → Revise → Calcule → Analise → Gerencie prazos. Tudo em um ambiente só, sem trocar de ferramenta a cada etapa.' },
      { icon: '🔒', title: 'Dados sob sigilo', desc: 'Os dados dos seus processos não são usados para treinar modelos. Cada escritório tem seu espaço isolado.' },
      { icon: '📈', title: 'Upgrade natural para o plano anual', desc: 'O plano mensal tem limite de tokens. Escritórios com volume médio-alto migram naturalmente para o anual (R$1.997) que remove os limites operacionais.' },
    ],

    prompts: [
      { label: 'Petição Inicial (Agente Redator)', text: 'Informe no Copiloto: tipo de ação, partes, tribunal, fatos principais, pedidos. O Agente Redator gera a petição completa com fundamentos e jurisprudência.' },
      { label: 'Análise de Risco (Agente Analista)', text: 'Informe o caso ao Agente Analista: vara, juiz, histórico de decisões similares, valor da causa. Ele retorna: probabilidade de êxito, pontos de risco, estratégia recomendada.' },
    ],

    pricing: {
      plans: [
        { name: 'Mensal', price: 'R$ 27/mês', highlight: false, features: ['Todos os 6 agentes', 'Limite de tokens mensal', 'Suporte por WhatsApp'] },
        { name: 'Anual', price: 'R$ 1.997 (único)', highlight: true, features: ['Tudo do mensal', 'Tokens ilimitados', 'Prioridade de suporte', 'Acesso antecipado a novos agentes'] },
        { name: 'Mentoria', price: 'R$ 5.000', highlight: false, features: ['Implementação no escritório', 'Workflows personalizados', 'Acompanhamento 30 dias'] },
      ]
    },

    alternatives: ['ChatGPT Business', 'Claude for Work', 'Harvey AI'],
  },

  {
    abbr: 'SPB', logoUrl: logo('spellbook.legal'), logoBg: '#fff',
    name: 'Spellbook', stars: 4, badge: 'Pago', badgeType: 'paid',
    desc: 'IA para redação de contratos direto no Word. Sugere cláusulas, detecta riscos e compara com padrões de mercado.',
    tags: ['Word', 'Cláusulas', 'Contratos'],
    price: 'US$ 99/mês', url: 'https://www.spellbook.legal',
    category: 'Redação de Peças', saves: 1320, views: 10400,
    gradient: 'linear-gradient(135deg, #7c3aed 0%, #312e81 100%)', featured: false,

    overview: `Spellbook é um add-in para Microsoft Word que usa GPT-4 treinado em contratos legais. Você redige o contrato normalmente no Word e o Spellbook sugere cláusulas, detecta inconsistências e alerta sobre cláusulas ausentes que deveriam estar presentes.\n\nÉ especialmente útil para contratos de serviços, locação, licenciamento e M&A — áreas onde há padrões de mercado bem estabelecidos.`,

    howToUse: [
      { step: 1, title: 'Instale o add-in no Word', desc: 'Acesse spellbook.legal, crie conta e instale o add-in. Ele aparece como painel lateral no Microsoft Word (Web ou Desktop).' },
      { step: 2, title: 'Selecione uma cláusula e peça revisão', desc: 'Selecione qualquer cláusula do contrato e clique em "Review". O Spellbook analisa a cláusula no contexto do contrato inteiro e sugere melhorias.' },
      { step: 3, title: 'Use "First Draft" para começar do zero', desc: 'Para um novo contrato, use "First Draft": informe o tipo de contrato, as partes e os pontos principais. O Spellbook gera o rascunho inicial.' },
      { step: 4, title: 'Verifique cláusulas ausentes', desc: 'Use "Missing Clauses" para o Spellbook listar o que falta: cláusula de confidencialidade, foro de eleição, limitação de responsabilidade, etc.' },
    ],

    tips: [
      { icon: '📝', title: 'Melhor para contratos B2B', desc: 'Spellbook tem base de dados forte em contratos corporativos americanos. Para contratos de consumo ou locação residencial no Brasil, complemente com revisão própria.' },
      { icon: '🔍', title: 'Use o "Explain" para entender cláusulas', desc: 'Selecione qualquer cláusula e clique em "Explain". Ideal para entender contratos em inglês ou cláusulas técnicas de áreas não dominadas.' },
    ],

    prompts: [
      { label: 'Review de Cláusula', text: 'No Spellbook, selecione a cláusula e use: "Review from buyer perspective" ou "Review from seller perspective". Ele analisa considerando seu lado da negociação.' },
    ],

    pricing: {
      plans: [
        { name: 'Starter', price: 'US$ 99/mês', highlight: false, features: ['1 usuário', '50 reviews/mês', 'Contratos em inglês'] },
        { name: 'Professional', price: 'US$ 199/mês', highlight: true, features: ['Ilimitado', 'Multi-idioma', 'Suporte prioritário'] },
      ]
    },

    alternatives: ['Claude for Work', 'DocuSign AI', 'Copiloto Jurídico'],
  },

  {
    abbr: 'DOC', logoUrl: logo('docusign.com'), logoBg: '#fff',
    name: 'DocuSign AI', stars: 4, badge: 'Pago', badgeType: 'paid',
    desc: 'Extrai obrigações e riscos de contratos com IA. Acelera a due diligence e identifica cláusulas problemáticas.',
    tags: ['Due Diligence', 'Contratos', 'Extração'],
    price: 'A partir de US$ 45/mês', url: 'https://www.docusign.com',
    category: 'Redação de Peças', saves: 760, views: 5900,
    gradient: 'linear-gradient(135deg, #2563eb 0%, #1e3a8a 100%)', featured: false,

    overview: `DocuSign AI (parte do DocuSign Intelligent Agreement Management) vai além da assinatura eletrônica. O módulo de IA extrai automaticamente dados-chave de contratos: datas de vencimento, obrigações de cada parte, penalidades, cláusulas de renovação automática e valores.\n\nPara escritórios com grande volume de contratos, é uma ferramenta de produtividade — você processa dezenas de contratos em minutos e recebe alertas antes de vencimentos importantes.`,

    howToUse: [
      { step: 1, title: 'Conecte seu repositório de contratos', desc: 'DocuSign AI se conecta ao Google Drive, SharePoint ou diretório local. Sobe os contratos de uma vez.' },
      { step: 2, title: 'Configure a extração de dados', desc: 'Defina quais campos quer extrair de todos os contratos: data de início, data de vencimento, valor, partes, obrigações principais, penalidades.' },
      { step: 3, title: 'Ative alertas de vencimento', desc: 'Configure para receber notificação 90, 60 e 30 dias antes do vencimento de qualquer contrato. Ideal para gestão de contratos de fornecedores e serviços.' },
    ],

    tips: [
      { icon: '📅', title: 'Elimine surpresas de renovação automática', desc: 'A função mais valiosa: identifica todos os contratos com cláusula de renovação automática e alerta antes da janela de cancelamento.' },
      { icon: '📊', title: 'Dashboard de obrigações', desc: 'O DocuSign AI gera um dashboard com todas as obrigações contratuais por data — você vê o que vence cada mês e prioriza revisões.' },
    ],

    prompts: [
      { label: 'Extração de Dados', text: 'No DocuSign AI, configure a extração para: (1) data de vencimento, (2) valor do contrato, (3) cláusula de renovação, (4) penalidade por rescisão, (5) foro de eleição.' },
    ],

    pricing: {
      plans: [
        { name: 'Starter', price: 'US$ 45/mês', highlight: false, features: ['Assinatura eletrônica', 'IA básica de extração'] },
        { name: 'Business Pro', price: 'US$ 65/mês', highlight: true, features: ['IA completa', 'Alertas automáticos', 'Integração Drive/SharePoint', 'Relatórios'] },
      ]
    },

    alternatives: ['Spellbook', 'Claude for Work'],
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

    overview: `Astrea (e seu produto integrado Aurum) é o software de gestão processual mais usado por advogados brasileiros. Integra com todos os tribunais do país via robô de monitoramento — você cadastra os processos e o sistema monitora as movimentações automaticamente.\n\nA parte de IA ajuda na categorização de processos, sugestão de prazos e análise de produtividade do escritório: quantas peças por advogado, taxa de êxito por área, receita por cliente.`,

    howToUse: [
      { step: 1, title: 'Importe seus processos', desc: 'Informe os números dos processos (CNJ ou OAB). O Astrea busca automaticamente as informações nos sistemas dos tribunais e preenche a ficha do processo.' },
      { step: 2, title: 'Configure agenda de prazos', desc: 'Defina os tipos de prazo (contestação, recurso, audiência) e os avisos antecipados (15 dias, 5 dias, 1 dia). O sistema cria as tarefas automaticamente na agenda.' },
      { step: 3, title: 'Acompanhe o dashboard financeiro', desc: 'Cadastre os honorários de cada cliente (fixo + êxito). O Astrea calcula a rentabilidade por processo, advogado e área do escritório.' },
      { step: 4, title: 'Use os relatórios de produtividade', desc: 'Mensalmente, acesse os relatórios: processos activos por advogado, prazo médio de resolução, taxa de êxito, receita gerada vs horas trabalhadas.' },
    ],

    tips: [
      { icon: '⏰', title: 'Configure avisos em cascata', desc: 'Não configure só 1 aviso por prazo. Use: 15 dias antes (preparar), 5 dias antes (redigir), 1 dia antes (revisar e protocolar). Isso cria um fluxo de produção.' },
      { icon: '💰', title: 'Monitore honorários de êxito', desc: 'Configure um campo de "honorários de êxito estimados" por processo. O Astrea calcula o portfólio total de honorários futuros — ajuda no planejamento financeiro.' },
      { icon: '📱', title: 'App mobile para audiências', desc: 'O app do Astrea tem acesso offline à ficha do processo. Essencial em audiências: você consulta histórico, anotações e documentos sem depender de internet.' },
      { icon: '🤝', title: 'Compartilhe com o cliente', desc: 'O Astrea tem portal do cliente: o cliente acessa o status do processo dele sem precisar ligar para o escritório. Reduz chamadas e aumenta satisfação.' },
    ],

    prompts: [
      { label: 'Análise de Portfólio (via GPT)', text: 'Cole o relatório do Astrea e peça ao ChatGPT: "Analise esse portfólio de processos. Identifique: (1) áreas com maior taxa de êxito, (2) processos com risco de prescrição, (3) recomendações de priorização."' },
    ],

    pricing: {
      plans: [
        { name: 'Grátis', price: 'R$ 0', highlight: false, features: ['Até 30 processos', 'Agenda básica'] },
        { name: 'Solo', price: 'R$ 89/mês', highlight: false, features: ['Processos ilimitados', 'Monitoramento automático', 'App mobile'] },
        { name: 'Escritório', price: 'R$ 189/mês', highlight: true, features: ['Multi-usuário', 'Financeiro completo', 'Portal do cliente', 'Relatórios avançados'] },
      ]
    },

    alternatives: ['AdvBox', 'Toggl Track'],
  },

  {
    abbr: 'ADV', logoUrl: logo('advbox.com.br'), logoBg: '#fff',
    name: 'AdvBox', stars: 4, badge: 'Pago', badgeType: 'paid',
    desc: 'Software jurídico completo com CRM para escritórios. Gestão de processos, financeiro e relacionamento com clientes.',
    tags: ['CRM', 'Processos', 'Financeiro'],
    price: 'A partir de R$ 139/mês', url: 'https://www.advbox.com.br',
    category: 'Gestão de Escritório', saves: 1890, views: 14800,
    gradient: 'linear-gradient(135deg, #16a34a 0%, #14532d 100%)', featured: false,

    overview: `AdvBox é um software jurídico brasileiro completo que combina gestão processual, CRM para clientes, controle financeiro e comunicação em uma plataforma só. Para escritórios que querem centralizar operação e relacionamento com clientes, é uma das opções mais completas do mercado nacional.`,

    howToUse: [
      { step: 1, title: 'Configure o CRM de clientes', desc: 'Cadastre todos os clientes com dados de contato, histórico de relacionamento, processos vinculados e status do relacionamento (ativo, inativo, prospect).' },
      { step: 2, title: 'Vincule processos a clientes', desc: 'Cada processo fica vinculado ao cliente e ao advogado responsável. Você vê o histórico completo do cliente: quantos casos, resultado, receita gerada.' },
      { step: 3, title: 'Gerencie honorários', desc: 'Configure os contratos de honorários: fixo mensal, por ato, por êxito, ou combinado. O sistema calcula o que está em aberto e gera relatório financeiro.' },
    ],

    tips: [
      { icon: '📞', title: 'Use o histórico de comunicação', desc: 'Registre toda comunicação com o cliente (ligações, e-mails, WhatsApp) no AdvBox. Isso cria um histórico completo que protege o advogado em caso de disputas sobre o escopo do serviço.' },
    ],

    prompts: [],

    pricing: {
      plans: [
        { name: 'Solo', price: 'R$ 139/mês', highlight: false, features: ['1 usuário', 'Processos ilimitados', 'CRM básico'] },
        { name: 'Equipe', price: 'R$ 279/mês', highlight: true, features: ['Até 5 usuários', 'CRM completo', 'Financeiro', 'Integração WhatsApp'] },
      ]
    },

    alternatives: ['Astrea / Aurum', 'Toggl Track'],
  },

  {
    abbr: 'TIM', logoUrl: logo('toggl.com'), logoBg: '#fff',
    name: 'Toggl Track', stars: 4, badge: 'Freemium', badgeType: 'freemium',
    desc: 'Controle de horas por cliente e processo. Geração automática de relatórios para cobrança de honorários.',
    tags: ['Horas', 'Honorários', 'Relatórios'],
    price: 'Grátis até 5 usuários', url: 'https://toggl.com/track',
    category: 'Gestão de Escritório', saves: 730, views: 5600,
    gradient: 'linear-gradient(135deg, #e11d48 0%, #881337 100%)', featured: false,

    overview: `Toggl Track é a referência em controle de horas para profissionais liberais. Para advogados que cobram por hora ou que precisam justificar o tempo dedicado a cada cliente, é essencial.\n\nA integração com a IA do Toggl (disponível nos planos pagos) analisa onde você gasta o tempo e sugere otimizações: "Você gasta 40% do tempo em tarefas administrativas — considere delegação."`,

    howToUse: [
      { step: 1, title: 'Crie projetos por cliente/processo', desc: 'Crie um projeto para cada cliente e subprojetos por processo. Ex: "João Silva" > "Ação Trabalhista TRT-2".' },
      { step: 2, title: 'Ative o timer antes de trabalhar', desc: 'Antes de iniciar qualquer tarefa para um cliente, inicie o timer no Toggl. No celular, no desktop ou pelo Chrome extension.' },
      { step: 3, title: 'Exporte relatórios mensais', desc: 'No final do mês, exporte o relatório por cliente. Use para emitir NF de honorários ou para prestação de contas em processos de êxito.' },
    ],

    tips: [
      { icon: '⏱️', title: 'Time tracking muda a percepção de valor', desc: 'Advogados que controlam horas geralmente descobrem que cobram pouco. O Toggl mostra que aquela "petição rápida" levou 4 horas — informação crucial para renegociar honorários.' },
    ],

    prompts: [],

    pricing: {
      plans: [
        { name: 'Free', price: 'Grátis', highlight: false, features: ['Até 5 usuários', 'Relatórios básicos'] },
        { name: 'Starter', price: 'US$ 10/usuário/mês', highlight: true, features: ['Relatórios avançados', 'Faturamento', 'Integrações'] },
      ]
    },

    alternatives: ['Astrea / Aurum', 'AdvBox'],
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

    overview: `Zapier é a plataforma de automação no-code mais usada do mundo. Com AI Actions, você descreve a automação em português e o Zapier monta o fluxo. Para escritórios jurídicos, o potencial é enorme: automatizar triagem de e-mails de clientes, criação de tarefas no Astrea quando entra um novo processo, envio de WhatsApp em datas de prazo crítico.\n\nA versão gratuita (100 tasks/mês) é suficiente para testar e implementar as primeiras automações.`,

    howToUse: [
      { step: 1, title: 'Comece com uma automação simples', desc: 'Ex: "Quando recebo um e-mail com [nome do cliente] → cria tarefa no Notion/Asana com prazo de 24h". Isso já economiza 5 minutos por e-mail.' },
      { step: 2, title: 'Use AI para criar o Zap', desc: 'Na criação de novo Zap, clique em "Describe what you want". Descreva em português: "Quando novo cliente assina contrato no DocuSign, adicionar no CRM e enviar mensagem de boas-vindas no WhatsApp."' },
      { step: 3, title: 'Conecte JusBrasil + Astrea + WhatsApp', desc: 'Automação poderosa: quando JusBrasil detecta movimentação em processo → Astrea cria tarefa com prazo → WhatsApp envia alerta para o advogado responsável.' },
      { step: 4, title: 'Teste com volume baixo antes de ativar', desc: 'Ative o Zap em modo de teste por 48h. Verifique se os dados estão corretos antes de escalar para 100% dos processos.' },
    ],

    tips: [
      { icon: '🤖', title: 'Automação mais valiosa: alertas de prazo', desc: 'Configure: Astrea detecta prazo em 5 dias → Zapier envia WhatsApp para o advogado + cria evento no Google Calendar + cria tarefa no Notion. Tudo automaticamente.' },
      { icon: '📧', title: 'Triagem automática de e-mails', desc: 'Gmail → Zapier → ChatGPT: "Classifique este e-mail como urgente/normal/spam jurídico e extraia: remetente, assunto, prazo mencionado". Resultado vai para planilha do escritório.' },
      { icon: '💰', title: 'Comece gratuito, escale quando necessário', desc: '100 tasks/mês gratuitas cobre as primeiras automações. Quando você sentir o valor, o plano Starter (US$20/mês) libera 750 tasks — suficiente para um escritório solo.' },
    ],

    prompts: [
      { label: 'Automação de Triagem', text: 'Configure no Zapier: Trigger: Gmail (novo e-mail) → Filter: assunto contém [palavra do cliente] → Action: ChatGPT analisa urgência → Notion cria tarefa com prioridade definida pela IA.' },
      { label: 'Alerta Multi-canal', text: 'Configure: JusBrasil alerta movimentação → Zapier → (1) cria tarefa no Astrea, (2) envia WhatsApp para advogado, (3) cria evento no Google Calendar com prazo calculado.' },
    ],

    pricing: {
      plans: [
        { name: 'Free', price: 'Grátis', highlight: false, features: ['100 tasks/mês', 'Zaps simples (2 etapas)'] },
        { name: 'Starter', price: 'US$ 20/mês', highlight: false, features: ['750 tasks/mês', 'Zaps multi-etapa', 'Filtros'] },
        { name: 'Professional', price: 'US$ 49/mês', highlight: true, features: ['2.000 tasks/mês', 'AI Actions', 'Zaps ilimitados', 'Lógica condicional'] },
      ]
    },

    alternatives: ['Make (Integromat)', 'n8n'],
  },

  {
    abbr: 'MKE', logoUrl: logo('make.com'), logoBg: '#fff',
    name: 'Make (Integromat)', stars: 5, badge: 'Freemium', badgeType: 'freemium',
    desc: 'Automação visual com cenários complexos. Ideal para fluxos jurídicos com condicionais, loops e tratamento de erros.',
    tags: ['Visual', 'Cenários', 'APIs'],
    price: 'Grátis até 1.000 ops/mês', url: 'https://www.make.com',
    category: 'Automação', saves: 2180, views: 17300,
    gradient: 'linear-gradient(135deg, #6d28d9 0%, #2e1065 100%)', featured: false,

    overview: `Make (antigo Integromat) é mais poderoso que o Zapier para automações complexas. A interface visual por módulos permite criar cenários com ramificações, loops (repetir para cada item de uma lista), manipulação de dados e tratamento de erros.\n\nPara escritórios com fluxos mais sofisticados — como processar uma lista de 50 processos, buscar movimentação em cada um e consolidar em relatório — o Make é a escolha certa.`,

    howToUse: [
      { step: 1, title: 'Crie um cenário visual', desc: 'No Make, você arrasta módulos (Gmail, Notion, ChatGPT, WhatsApp) e conecta com fios visuais. Cada módulo tem configuração própria.' },
      { step: 2, title: 'Use iteradores para listas', desc: 'Para processar uma lista de processos de uma vez: Array Iterator → HTTP Request (busca movimentação) → Router (se houve movimentação → cria tarefa). Isso processa todos em uma execução.' },
      { step: 3, title: 'Configure tratamento de erro', desc: 'Adicione módulos de Error Handler para que, se um processo não for encontrado, o cenário continue processando os outros em vez de parar tudo.' },
    ],

    tips: [
      { icon: '🔄', title: 'Mais poderoso, mais complexo', desc: 'Make tem curva de aprendizado maior que Zapier. Se você é iniciante em automação, comece pelo Zapier. Migre para o Make quando precisar de lógica mais avançada.' },
      { icon: '💡', title: 'Use para processar lotes', desc: 'O Make é excelente para processar lotes de dados: "Toda segunda-feira de manhã, busca movimentação de todos os 50 processos e envia relatório consolidado por e-mail."' },
    ],

    prompts: [],

    pricing: {
      plans: [
        { name: 'Free', price: 'Grátis', highlight: false, features: ['1.000 operações/mês', '2 cenários ativos'] },
        { name: 'Core', price: 'US$ 10/mês', highlight: false, features: ['10.000 ops/mês', 'Cenários ilimitados'] },
        { name: 'Pro', price: 'US$ 20/mês', highlight: true, features: ['10.000 ops/mês', 'Execuções paralelas', 'Módulos premium'] },
      ]
    },

    alternatives: ['Zapier AI', 'n8n'],
  },

  {
    abbr: 'N8N', logoUrl: logo('n8n.io'), logoBg: '#fff',
    name: 'n8n', stars: 5, badge: 'Freemium', badgeType: 'freemium',
    desc: 'Automação self-hosted com 400+ integrações. Total controle dos dados. Ideal para escritórios com equipe técnica.',
    tags: ['Self-hosted', 'Webhooks', 'Open Source'],
    price: 'Grátis (self-host)', url: 'https://n8n.io',
    category: 'Automação', saves: 1960, views: 15400,
    gradient: 'linear-gradient(135deg, #ea580c 0%, #431407 100%)', featured: false,

    overview: `n8n é a opção de automação para quem quer controle total sobre os dados. Por ser open-source e self-hosted, você instala no seu servidor e nenhum dado do escritório passa por servidores de terceiros — crucial para confidencialidade.\n\nPara quem não tem equipe técnica, o n8n Cloud (plano pago) oferece a versão hospedada pelo próprio n8n. Para quem tem, o self-host é gratuito e ilimitado.`,

    howToUse: [
      { step: 1, title: 'Escolha: Cloud ou Self-hosted', desc: 'Cloud: mais fácil, US$ 20/mês, sem gerenciar servidor. Self-hosted: gratuito, requer um servidor (VPS a partir de R$ 50/mês) e conhecimento técnico básico.' },
      { step: 2, title: 'Crie workflows visualmente', desc: 'Interface similar ao Make. Adicione nodes (Gmail, HTTP, Code, WhatsApp), conecte e configure cada um.' },
      { step: 3, title: 'Use o Code Node para lógica complexa', desc: 'O n8n tem um node de JavaScript para lógica personalizada. Você pode manipular dados com código antes de enviar para o próximo step.' },
    ],

    tips: [
      { icon: '🔒', title: 'Dados 100% no seu servidor', desc: 'Para processos com informações sensíveis de clientes, o n8n self-hosted é a única opção de automação que garante que os dados não saem do seu controle.' },
    ],

    prompts: [],

    pricing: {
      plans: [
        { name: 'Self-hosted', price: 'Grátis', highlight: false, features: ['Ilimitado', 'Requer servidor próprio', 'Open source'] },
        { name: 'Cloud Starter', price: 'US$ 20/mês', highlight: true, features: ['2.500 execuções/mês', 'Hospedado pelo n8n', 'Sem gerenciar servidor'] },
      ]
    },

    alternatives: ['Zapier AI', 'Make (Integromat)'],
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

    overview: `Predi.legal é a principal plataforma de jurimetria do Brasil. Ela analisa o histórico de decisões de juízes, varas e tribunais brasileiros para calcular probabilidade de êxito em ações específicas.\n\nPara advogados, o uso mais prático é na fase de avaliação do caso: antes de entrar com a ação, você verifica qual a taxa histórica de procedência naquela vara, com aquele juiz, para aquele tipo de pedido. Isso fundamenta tanto a decisão estratégica quanto a comunicação com o cliente.`,

    howToUse: [
      { step: 1, title: 'Defina os parâmetros do caso', desc: 'Informe: tribunal, vara (se já designada), tipo de ação, área do direito, pedidos principais. Quanto mais específico, mais precisa a análise.' },
      { step: 2, title: 'Analise o perfil do juiz', desc: 'Se o juiz já foi designado, busque o perfil: taxa de procedência por tipo de ação, tempo médio de sentença, tendência para conciliação, recursos mais providos.' },
      { step: 3, title: 'Use para comunicação com o cliente', desc: 'A jurimetria transforma "acho que temos chances" em "historicamente, 68% dos casos similares nessa vara são procedentes". Isso profissionaliza a conversa.' },
      { step: 4, title: 'Compare varas para estratégia de foro', desc: 'Em casos onde há competência em mais de uma vara, compare as taxas de procedência e escolha o foro mais favorável para seu pedido.' },
    ],

    tips: [
      { icon: '📊', title: 'Jurimetria como diferencial competitivo', desc: 'Advogados que usam jurimetria cobram mais: a análise de risco fundamentada vale mais do que um parecer baseado em "experiência". É dado concreto vs. opinião.' },
      { icon: '🤝', title: 'Fundamente a decisão de aceitar o caso', desc: 'Casos com probabilidade de êxito abaixo de 30% merecem reflexão: honorários de êxito podem não compensar o trabalho. A jurimetria ajuda a decidir com dados.' },
      { icon: '⚖️', title: 'Use para calcular honorários de êxito', desc: 'Um caso com 80% de probabilidade de êxito pode ter honorários de êxito mais altos do que um com 40%. A jurimetria justifica a proposta.' },
    ],

    prompts: [
      { label: 'Análise de Viabilidade (via GPT)', text: 'Com base nos dados de jurimetria abaixo, analise a viabilidade do caso e redija um parecer para o cliente explicando: probabilidade de êxito, tempo estimado, valor a ser demandado, estratégia recomendada. Dados: [cole os dados do Predi.legal]' },
    ],

    pricing: {
      plans: [
        { name: 'Plano Base', price: 'Sob consulta', highlight: true, features: ['Análise por tribunal e vara', 'Perfil de juízes', 'Histórico de decisões', 'Relatórios exportáveis'] },
      ]
    },

    alternatives: ['Lex Machina', 'JusBrasil Pro'],
  },

  {
    abbr: 'ELC', logoUrl: '', logoBg: '#1d4ed8',
    name: 'Elcvia Analytics', stars: 4, badge: 'Pago', badgeType: 'paid',
    desc: 'Dashboard de jurimetria para advocacia empresarial. Cruza dados de TJ, TRF e TRT em uma interface unificada.',
    tags: ['Dashboard', 'Analytics', 'TJ/TRF'],
    price: 'A partir de R$ 350/mês', url: '#',
    category: 'Jurimetria', saves: 680, views: 5100,
    gradient: 'linear-gradient(135deg, #1d4ed8 0%, #1e3a8a 100%)', featured: false,

    overview: `Elcvia Analytics é focado em advocacia empresarial e departamentos jurídicos. A plataforma cruza dados de múltiplos tribunais (TJ, TRF, TRT) em um único dashboard, permitindo visão consolidada do contencioso corporativo.\n\nIdeal para empresas com alto volume de processos trabalhistas, tributários e cíveis — o dashboard mostra exposição total, tendências e quais varas/regiões concentram mais risco.`,

    howToUse: [
      { step: 1, title: 'Mapeie o contencioso atual', desc: 'Importe a base de processos da empresa. O Elcvia classifica automaticamente por tribunal, área, fase processual e valor.' },
      { step: 2, title: 'Analise exposição por região', desc: 'O mapa de calor mostra em quais estados/varas a empresa tem maior concentração de processos e maior risco de derrota.' },
      { step: 3, title: 'Configure alertas de provisão', desc: 'Para cada processo de alto valor, o sistema sugere provisão contábil com base na probabilidade histórica de derrota.' },
    ],

    tips: [
      { icon: '🏢', title: 'Foco em contencioso empresarial', desc: 'Elcvia é mais indicado para departamentos jurídicos de empresas e escritórios de médio porte com foco em contencioso corporativo.' },
    ],

    prompts: [],

    pricing: {
      plans: [
        { name: 'Starter', price: 'R$ 350/mês', highlight: true, features: ['Dashboard unificado', 'Até 500 processos', 'TJ + TRT + TRF'] },
        { name: 'Enterprise', price: 'Sob consulta', highlight: false, features: ['Processos ilimitados', 'API', 'Integração com ERP'] },
      ]
    },

    alternatives: ['Predi.legal', 'JusBrasil Pro'],
  },
]
