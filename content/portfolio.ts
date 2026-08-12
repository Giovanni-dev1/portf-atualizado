// Conteúdo central do portfólio de Giovanni Crescenzi Bogner.
// Toda informação aqui vem do briefing fornecido. Nenhum número, data ou
// métrica foi inventado — onde a informação não existia, o campo foi
// deixado ausente (undefined) e a interface trata isso com um estado
// visual elegante, nunca com um dado fabricado.

export const site = {
  name: "Giovanni Crescenzi Bogner",
  monogram: "GCB",
  location: "Sorocaba, SP",
  email: "gihbogner@gmail.com",
  linkedin: "https://www.linkedin.com/in/giovanni-crescenzi-bogner-63b818303/",
  github: "https://github.com/Giovanni-dev1",
  resumeHref: undefined as string | undefined, // sem PDF real fornecido — botão fica oculto
  profileImageHref: undefined as string | undefined, // sem public/profile.webp fornecido
};

export const now = {
  role: "Customer Success & Tecnologia — Nola ERP",
  mode: "Remoto · Sorocaba, SP",
  focus: "Foco: produto, automação e experiência do cliente",
};

export const evidenceStrip = [
  "150+ empresas atendidas em carteira B2B na Economy Contabilidade",
  "ADS · FATEC Sorocaba",
  "AU Attitude Index · 96/100",
  "PT nativo · ES avançado · EN intermediário-avançado",
];

export const howHeWorks = [
  {
    step: "01",
    title: "Escutar e contextualizar",
    body: "Entender necessidade, cenário e impacto para o cliente antes de propor qualquer solução.",
  },
  {
    step: "02",
    title: "Organizar e traduzir",
    body: "Transformar relatos em processo, documentação, requisito ou tarefa técnica compreensível para quem vai construir.",
  },
  {
    step: "03",
    title: "Construir e acompanhar",
    body: "Implementar, testar, comunicar e melhorar com base no uso real — não no que parecia certo na teoria.",
  },
];

export type CaseStudy = {
  number: string;
  slug: string;
  title: string;
  status: string;
  type: string;
  oneLiner: string;
  role: string;
  stack: string[];
  summary: string;
  context: string;
  problem: string;
  process: string[];
  decisions?: string[];
  solutionPoints?: string[];
  roadmap?: string[];
  result: string;
  learnings: string[];
  nextSteps?: string;
  confidentialityNote?: string;
  links?: { label: string; href: string }[];
  hasRealImage: boolean;
};

export const caseStudies: CaseStudy[] = [
  {
    number: "01",
    slug: "saldo-e-foco",
    title: "Saldo e Foco",
    status: "Em evolução",
    type: "Produto próprio",
    oneLiner:
      "Informações financeiras, tarefas e operação de projetos digitais ficavam espalhadas, dificultando consistência e decisão.",
    role: "Idealização do produto, definição de requisitos, testes, priorização, acompanhamento da implementação e resolução de problemas de deploy e banco de dados.",
    stack: ["React", "TypeScript", "Supabase", "Recharts", "Vercel"],
    summary:
      "Ecossistema web pessoal para unir finanças, rotina e operação de projetos digitais em um único lugar.",
    context:
      "Giovanni conduz, paralelamente ao trabalho, iniciativas próprias — como o laboratório de conteúdo Camada Sombria e o produto educacional Carreira em Evidência. Acompanhar finanças, tarefas recorrentes, calendário e canais de cada frente em ferramentas separadas criava atrito e perda de visão geral.",
    problem:
      "Informações financeiras, tarefas recorrentes, calendário e acompanhamento de canais ficavam espalhados, dificultando consistência e tomada de decisão.",
    process: [
      "Levantamento das próprias rotinas e pontos de atrito com planilhas e apps isolados.",
      "Definição de requisitos mínimos: saldo, movimentações, tarefas diárias e recorrência.",
      "Implementação incremental, com priorização guiada por uso real, não por lista de features ideal.",
      "Testes contínuos e correção de problemas de autenticação, deploy e persistência de dados.",
    ],
    decisions: [
      "Usar Supabase para autenticação e persistência, evitando manter infraestrutura própria de backend.",
      "Separar claramente o que está pronto do que é roadmap, para não gerar expectativa sobre funcionalidades ainda não implementadas.",
      "Priorizar consistência de dados por usuário antes de adicionar novas telas.",
    ],
    solutionPoints: [
      "Autenticação e dados persistentes com Supabase.",
      "Saldo total e movimentações de entrada e saída.",
      "Acompanhamento de ganhos por dia, mês e ano.",
      "Calendário e tarefas diárias.",
      "Tarefas recorrentes e replicação de atividades.",
      "Relatórios e gráficos com Recharts.",
      "Deploy contínuo com Vercel.",
    ],
    roadmap: [
      "Acompanhamento de seguidores e desempenho por vídeo.",
      "Crescimento de Instagram, TikTok e YouTube.",
      "Gestão paralela de Camada Sombria e Carreira em Evidência dentro do mesmo painel.",
      "Visão integrada de conteúdo, tarefas e receitas.",
    ],
    result:
      "Aplicação funcional em evolução, hoje usada como base central para organizar execução e finanças pessoais e das iniciativas paralelas.",
    learnings: [
      "Correção de build TypeScript revelou a importância de tipar dados desde o início, não depois.",
      "Limites de autenticação e de envio de e-mail do Supabase exigiram repensar o fluxo de cadastro.",
      "Gerar ocorrências de tarefas recorrentes com consistência é mais complexo do que parece à primeira vista.",
      "Separar dados por usuário desde a modelagem evita retrabalho de migração depois.",
    ],
    nextSteps:
      "Evoluir o roadmap de acompanhamento de conteúdo e consolidar a visão integrada entre finanças, tarefas e canais.",
    links: [{ label: "Repositório no GitHub", href: "https://github.com/Giovanni-dev1/saldo-e-foco" }],
    hasRealImage: false,
  },
  {
    number: "02",
    slug: "copiloto-de-atendimento",
    title: "Copiloto de Atendimento",
    status: "Em desenvolvimento",
    type: "Experimento interno",
    oneLiner:
      "Encontrar respostas corretas, reunir contexto e manter padrão de comunicação consome tempo em operações de suporte.",
    role: "Levantamento de necessidades, organização de conhecimento, testes de fluxos e treinamento iterativo do copiloto.",
    stack: ["ChatGPT", "Claude", "Cursor"],
    summary:
      "Iniciativa interna para tornar o atendimento mais rápido, consistente e apoiado por conhecimento organizado.",
    context:
      "No dia a dia de Customer Success, boa parte do tempo é gasto reunindo contexto — documentação, histórico do cliente, padrão de comunicação — antes mesmo de começar a responder. Esse é um ponto real de atrito em operações de suporte que crescem rápido.",
    problem:
      "Encontrar respostas corretas, reunir contexto e manter padrão de comunicação pode consumir tempo em operações de suporte.",
    process: [
      "Organização de materiais e documentação já existentes em uma base estruturada.",
      "Testes de fluxos de pergunta e resposta com diferentes ferramentas de IA.",
      "Ajuste iterativo com base em erros e lacunas identificados no uso real.",
      "Revisão humana constante antes de qualquer resposta chegar ao cliente.",
    ],
    solutionPoints: undefined,
    result:
      "Iniciativa em construção. Por respeito à confidencialidade do processo e dos dados da Nola, os detalhes de implementação, prompts e documentação internos não são divulgados aqui — o estudo de caso descreve o raciocínio e os princípios, não o conteúdo proprietário.",
    learnings: [
      "IA aplicada a atendimento funciona melhor como apoio à pessoa que atende, não como substituição.",
      "Rastreabilidade da origem de cada resposta é tão importante quanto a resposta em si.",
      "Segurança e revisão humana precisam ser parte do desenho desde o início, não um ajuste posterior.",
    ],
    confidentialityNote:
      "Por confidencialidade, dados de clientes, processos internos e documentação da Nola não são detalhados neste estudo de caso.",
    hasRealImage: false,
  },
  {
    number: "03",
    slug: "carreira-em-evidencia",
    title: "Carreira em Evidência",
    status: "Em validação e crescimento",
    type: "Marca educacional e produto digital",
    oneLiner:
      "Profissionais competentes frequentemente têm dificuldade de apresentar experiências, competências e resultados com clareza.",
    role: "Pesquisa, estratégia de marca, roteiro, produção de conteúdo, criação de e-book, publicação e testes de aquisição.",
    stack: ["TikTok", "LinkedIn", "Facebook", "Kiwify", "Amazon KDP"],
    summary:
      "Projeto sem exposição pessoal voltado a LinkedIn, currículo, Gupy, entrevistas e posicionamento profissional.",
    context:
      "A dificuldade de comunicar experiência profissional com clareza é recorrente entre pessoas tecnicamente competentes. Carreira em Evidência nasceu para atacar esse problema com conteúdo e um produto digital, sem prometer o que não pode ser garantido.",
    problem:
      "Profissionais competentes frequentemente têm dificuldade de apresentar experiências, competências e resultados com clareza.",
    process: [
      "Pesquisa sobre dores recorrentes em currículo, LinkedIn, Gupy e entrevistas.",
      "Definição de linha editorial sem promessas de contratação nem fórmulas milagrosas.",
      "Reaproveitamento responsável de um mesmo tema em vídeo curto, post profissional e publicação de Facebook.",
      "Criação de e-book e distribuição via Kiwify e Amazon KDP.",
      "Testes de aquisição e conversa direta em comunidades.",
    ],
    result:
      "Produto em validação e crescimento. Sem números de seguidores, vendas ou faturamento divulgados até que haja medição consolidada.",
    learnings: [
      "Reaproveitar um tema com responsabilidade editorial é mais sustentável do que produzir conteúdo disperso.",
      "Clareza sobre o que o produto promete — e não promete — é parte da credibilidade da marca.",
    ],
    hasRealImage: false,
  },
  {
    number: "04",
    slug: "presenca-digital",
    title: "Presença Digital para Negócios",
    status: "Ativo",
    type: "Desenvolvimento web e atuação freelancer",
    oneLiner:
      "Pequenos negócios e profissionais precisam apresentar serviços com clareza e facilitar o contato, sem estruturas caras ou complexas.",
    role: "Conversa com cliente, definição de escopo, copy inicial, estrutura de página, desenvolvimento responsivo e publicação.",
    stack: ["HTML", "CSS", "JavaScript", "React", "Git/GitHub", "Vercel", "Netlify"],
    summary:
      "Landing pages e sites — incluindo o Studio Uniq — desenvolvidos por projeto para negócios locais e profissionais autônomos.",
    context:
      "Atuação freelancer conectando necessidade comercial direta e execução técnica: cada projeto parte de uma conversa sobre o que o negócio precisa comunicar e como facilitar o contato do cliente final.",
    problem:
      "Pequenos negócios e profissionais precisam apresentar serviços com clareza e facilitar o contato, sem depender de estruturas caras ou complexas.",
    process: [
      "Conversa inicial para entender serviço, público e forma de contato preferida.",
      "Definição de escopo e copy inicial junto ao cliente.",
      "Estruturação da página e desenvolvimento responsivo.",
      "Publicação em Vercel ou Netlify e acompanhamento pós-entrega.",
    ],
    solutionPoints: [
      "Studio Uniq — presença digital para um negócio local, com informações e imagens fornecidas pelo cliente.",
      "Landing Master e outras landing pages publicadas para clientes diretos.",
    ],
    result:
      "Sites publicados e experiência prática conectando necessidade comercial e execução técnica.",
    learnings: [
      "Escopo bem definido no início evita retrabalho e alinhamento de expectativa no final do projeto.",
      "Copy clara importa tanto quanto o código para a conversão de um pequeno negócio.",
    ],
    hasRealImage: false,
  },
];

export type Experience = {
  org: string;
  role: string;
  period: string;
  mode?: string;
  bullets: string[];
  note?: string;
};

export const experiences: Experience[] = [
  {
    org: "Nola ERP",
    role: "Customer Success & Tecnologia",
    period: "ago/2026 — atual",
    mode: "Remoto",
    bullets: [
      "Atendimento e orientação a clientes no uso da plataforma.",
      "Apoio a implantação, configuração e acompanhamento da adoção.",
      "Investigação inicial de problemas técnicos e registro de bugs com contexto útil.",
      "Interface entre necessidade do cliente e time de desenvolvimento.",
      "Produção de materiais e melhoria de processos de suporte.",
      "Desenvolvimento experimental de um copiloto interno de atendimento com IA.",
    ],
  },
  {
    org: "Economy Contabilidade",
    role: "Customer Success & Tecnologia",
    period: "2026",
    bullets: [
      "Atendimento B2B a uma carteira de mais de 150 empresas.",
      "Apoio no envio de guias do Simples Nacional, regularizações e documentação.",
      "Criação de automações e melhorias com Excel/VBA.",
      "Relatórios, indicadores, análise de dados e acompanhamento de processos.",
      "Comunicação com clientes e iniciativas de transformação digital.",
    ],
  },
  {
    org: "Kodland",
    role: "Instrutor de Programação",
    period: "Período não confirmado",
    bullets: [
      "Ensino de programação e pensamento lógico para alunos de 8 a 17 anos.",
      "Condução de aulas e acompanhamento de projetos.",
      "Tradução de conceitos técnicos para uma linguagem simples e motivadora.",
    ],
  },
  {
    org: "Desenvolvimento web",
    role: "Atuação freelancer, por projeto",
    period: "Sem datas fixas — atuação contínua por demanda",
    bullets: [
      "Descoberta de necessidades e contato direto com clientes.",
      "Desenvolvimento de landing pages, sites responsivos e aplicações web.",
      "HTML, CSS, JavaScript, React e integrações com APIs.",
      "Publicação em plataformas como Vercel e Netlify.",
    ],
  },
];

export const studentLeadership = {
  title: "Liderança estudantil",
  bullets: [
    "Fundador e presidente de duas entidades estudantis na FATEC, incluindo a Atlética.",
    "Organização, comunicação, eventos, colaboração e tomada de responsabilidade.",
  ],
};

export const education = {
  institution: "FATEC Sorocaba",
  course: "Análise e Desenvolvimento de Sistemas",
  status: "Em andamento",
};

export const aboutCopy = {
  paragraphs: [
    "Sou estudante de Análise e Desenvolvimento de Sistemas na FATEC Sorocaba e trabalho onde experiência do cliente, produto e tecnologia se encontram. Gosto de entender um problema de ponta a ponta, organizar o contexto e encontrar a forma mais útil de resolvê-lo — seja por atendimento, documentação, melhoria de processo, automação ou software.",
    "Minha trajetória combina contato direto com clientes B2B, suporte e implantação de sistemas, automações com Excel e VBA, análise de indicadores, desenvolvimento web, ensino de programação e projetos digitais próprios. Essa combinação me ensinou que uma solução tecnicamente correta só é boa quando as pessoas conseguem utilizá-la e perceber valor nela.",
    "No longo prazo, quero assumir projetos cada vez mais complexos e evoluir para gestão de projetos e liderança de equipes de tecnologia, sem perder a proximidade com o usuário e com a execução.",
  ],
  principles: [
    "Entender antes de construir.",
    "Explicar com clareza é parte da solução.",
    "Processo bom reduz atrito, não cria burocracia.",
    "Automação deve liberar pessoas para decisões melhores.",
    "Resultado real vale mais do que complexidade aparente.",
  ],
};

export type LabProject = {
  title: string;
  status: string;
  description: string;
  stack?: string[];
};

export const labProjects: LabProject[] = [
  {
    title: "Emotions Dashboard",
    status: "Experimento",
    description: "Interface de visualização de dados e emoções construída com React e Chart.js.",
    stack: ["React", "Chart.js"],
  },
  {
    title: "DocuGen AI",
    status: "Conceito",
    description: "Conceito de produto de geração inteligente de documentos, acompanhado de documentação de BRD/PRD.",
  },
  {
    title: "Camada Sombria",
    status: "Em produção",
    description:
      "Laboratório de conteúdo sobre inteligência artificial, tecnologia e impactos digitais, com pesquisa, roteirização e distribuição para TikTok, Instagram e YouTube.",
  },
  {
    title: "Projetos acadêmicos selecionados",
    status: "Acadêmico",
    description: "Aplicações em C, C#, Java, estruturas de dados, Oracle/SQL e projetos de interface — FATEC Sorocaba.",
  },
];

export const skillGroups = [
  {
    title: "Cliente e operação",
    items: [
      "Customer Success",
      "Atendimento B2B",
      "Onboarding e implantação",
      "Suporte técnico",
      "Investigação e registro de bugs",
      "Documentação e treinamento",
      "Acompanhamento de indicadores",
      "Melhoria de processos",
      "Comunicação com stakeholders",
    ],
  },
  {
    title: "Produto e projetos",
    items: [
      "Descoberta de problemas",
      "Levantamento de requisitos",
      "Priorização",
      "Feedback de produto",
      "Gestão de projetos em desenvolvimento",
      "Testes e validação",
      "Visão de experiência do usuário",
    ],
  },
  {
    title: "Desenvolvimento",
    items: [
      "HTML e CSS",
      "JavaScript e TypeScript",
      "React",
      "Python",
      "C e C#",
      "Java",
      "SQL e Oracle",
      "APIs REST",
      "Git e GitHub",
      "Supabase",
      "Vercel e Netlify",
    ],
  },
  {
    title: "Dados e automação",
    items: [
      "Excel e VBA",
      "Power BI",
      "Chart.js e Recharts",
      "n8n",
      "Automações com IA",
      "ChatGPT, Claude e Cursor como ferramentas de trabalho",
    ],
  },
];

export const languages = [
  { name: "Português", level: "Nativo" },
  { name: "Espanhol", level: "Avançado" },
  { name: "Inglês", level: "Intermediário-avançado" },
];

export const nav = [
  { label: "Trabalho", href: "/#trabalho" },
  { label: "Trajetória", href: "/#trajetoria" },
  { label: "Sobre", href: "/sobre" },
  { label: "Contato", href: "/contato" },
];
