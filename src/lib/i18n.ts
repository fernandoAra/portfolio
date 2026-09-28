export const locales = ['en', 'pt-BR'] as const;
export type Locale = (typeof locales)[number];

export function isLocale(value: string | undefined): value is Locale {
  return locales.includes(value as Locale);
}

export const copy = {
  en: {
    skip: 'Skip to content',
    nav: { home: 'Studio', work: 'Work', play: 'Play', about: 'About' },
    language: 'Português',
    languageCode: 'PT',
    eyebrow: 'Game systems · Sound · Interaction',
    titleLead: 'I build expressive',
    titleAccent: 'systems you can feel.',
    intro:
      'I’m Fernando de Souza Araujo, a creative technologist working where game programming, sound design, visual storytelling, and critical computing overlap.',
    browse: 'Browse the work',
    play: 'Play the brief',
    availability: 'Selected work / 2024—2026',
    featured: 'Selected projects',
    featuredNote: 'Filter the collection or open any card. Playing is always optional.',
    allWork: 'View all work',
    puzzleTitle: 'Build a project hand',
    puzzleNote: 'Combine real projects to answer a creative brief in two to four minutes.',
    openPlay: 'Enter the card studio',
    contact: 'Start a conversation',
    contactNote: 'The fastest route is through one of the public profiles below.',
    github: 'GitHub',
    linkedin: 'LinkedIn',
    cardOpen: 'Open case study',
    filters: 'Filter by capability',
    all: 'All',
    footer: 'Designed and built as an accessible, optional-play portfolio.',
  },
  'pt-BR': {
    skip: 'Pular para o conteúdo',
    nav: { home: 'Estúdio', work: 'Projetos', play: 'Jogar', about: 'Sobre' },
    language: 'English',
    languageCode: 'EN',
    eyebrow: 'Sistemas de jogos · Som · Interação',
    titleLead: 'Eu construo sistemas',
    titleAccent: 'expressivos que você sente.',
    intro:
      'Sou Fernando de Souza Araujo, tecnólogo criativo trabalhando no encontro entre programação de jogos, design de som, narrativa visual e computação crítica.',
    browse: 'Explorar projetos',
    play: 'Jogar o briefing',
    availability: 'Trabalhos selecionados / 2024—2026',
    featured: 'Projetos selecionados',
    featuredNote: 'Filtre a coleção ou abra qualquer carta. Jogar é sempre opcional.',
    allWork: 'Ver todos os projetos',
    puzzleTitle: 'Monte uma mão de projetos',
    puzzleNote: 'Combine projetos reais para responder a um briefing criativo em dois a quatro minutos.',
    openPlay: 'Entrar no estúdio de cartas',
    contact: 'Vamos conversar',
    contactNote: 'O caminho mais rápido é por um dos perfis públicos abaixo.',
    github: 'GitHub',
    linkedin: 'LinkedIn',
    cardOpen: 'Abrir estudo de caso',
    filters: 'Filtrar por competência',
    all: 'Todos',
    footer: 'Criado como um portfólio acessível em que jogar é opcional.',
  },
} as const;

export const traitLabels: Record<Locale, Record<string, string>> = {
  en: {
    Sound: 'Sound',
    Systems: 'Systems',
    Code: 'Code',
    Visuals: 'Visuals',
    Interaction: 'Interaction',
    Performance: 'Performance',
  },
  'pt-BR': {
    Sound: 'Som',
    Systems: 'Sistemas',
    Code: 'Código',
    Visuals: 'Visuais',
    Interaction: 'Interação',
    Performance: 'Desempenho',
  },
};

export function localizePath(pathname: string, locale: Locale) {
  const withoutLocale = pathname.replace(/^\/(en|pt-BR)(?=\/|$)/, '');
  return `/${locale}${withoutLocale || '/'}`.replace(/\/{2,}/g, '/');
}
