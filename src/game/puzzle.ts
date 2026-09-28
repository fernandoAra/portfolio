import type { Locale } from '../lib/i18n';
import type { ProjectSummary } from '../lib/projects';

export type Trait = ProjectSummary['traits'][number];

export interface PuzzleScenario {
  id: string;
  title: string;
  label: string;
  brief: string;
  requiredTraits: Trait[];
  maxCards: number;
  budget: number;
  success: string;
  hint: string;
}

const shared = {
  maxCards: 3,
};

export const scenarios: Record<Locale, PuzzleScenario[]> = {
  en: [
    {
      ...shared,
      id: 'immersive-audio',
      label: 'Brief 01',
      title: 'Immersive audio',
      brief: 'Create an experience where sound reveals structure and responds to the visitor.',
      requiredTraits: ['Sound', 'Interaction'],
      budget: 6,
      success: 'The hand connects sound to an active visitor decision.',
      hint: 'Look for projects carrying both listening and interaction experience.',
    },
    {
      ...shared,
      id: 'tactile-interaction',
      label: 'Brief 02',
      title: 'Tactile interaction',
      brief: 'Make an abstract system readable through code, motion, and clear visual feedback.',
      requiredTraits: ['Code', 'Interaction', 'Visuals'],
      budget: 7,
      success: 'The hand balances implementation with visible, interpretable feedback.',
      hint: 'Combine projects until code, interaction, and visuals are all represented.',
    },
    {
      ...shared,
      id: 'browser-performance',
      label: 'Brief 03',
      title: 'Performant browser work',
      brief: 'Ship an ambitious interactive piece while keeping its architecture deliberate and responsive.',
      requiredTraits: ['Performance', 'Systems', 'Code'],
      budget: 7,
      success: 'The hand demonstrates systems thinking under a real delivery constraint.',
      hint: 'Choose work involving performance, architecture, and implementation.',
    },
  ],
  'pt-BR': [
    {
      ...shared,
      id: 'immersive-audio',
      label: 'Briefing 01',
      title: 'Áudio imersivo',
      brief: 'Crie uma experiência em que o som revela estrutura e responde à pessoa visitante.',
      requiredTraits: ['Sound', 'Interaction'],
      budget: 6,
      success: 'A mão conecta som a uma decisão ativa da pessoa visitante.',
      hint: 'Procure projetos que combinem escuta e experiência interativa.',
    },
    {
      ...shared,
      id: 'tactile-interaction',
      label: 'Briefing 02',
      title: 'Interação tátil',
      brief: 'Torne um sistema abstrato legível por meio de código, movimento e feedback visual claro.',
      requiredTraits: ['Code', 'Interaction', 'Visuals'],
      budget: 7,
      success: 'A mão equilibra implementação com feedback visível e interpretável.',
      hint: 'Combine projetos até representar código, interação e visuais.',
    },
    {
      ...shared,
      id: 'browser-performance',
      label: 'Briefing 03',
      title: 'Desempenho no navegador',
      brief: 'Publique uma peça interativa ambiciosa com arquitetura deliberada e responsiva.',
      requiredTraits: ['Performance', 'Systems', 'Code'],
      budget: 7,
      success: 'A mão demonstra pensamento sistêmico sob uma restrição real de entrega.',
      hint: 'Escolha trabalhos que envolvam desempenho, arquitetura e implementação.',
    },
  ],
};

export function evaluateHand(projects: ProjectSummary[], scenario: PuzzleScenario) {
  const cost = projects.reduce((total, project) => total + project.cost, 0);
  const traits = new Set(projects.flatMap((project) => project.traits));
  const missingTraits = scenario.requiredTraits.filter((trait) => !traits.has(trait));
  const tooManyCards = projects.length > scenario.maxCards;
  const overBudget = cost > scenario.budget;
  return {
    cost,
    missingTraits,
    tooManyCards,
    overBudget,
    solved: projects.length > 0 && missingTraits.length === 0 && !tooManyCards && !overBudget,
  };
}
