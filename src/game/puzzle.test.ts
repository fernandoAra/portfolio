import { describe, expect, it } from 'vitest';
import { evaluateHand, scenarios } from './puzzle';
import type { ProjectSummary } from '../lib/projects';

function project(id: string, traits: ProjectSummary['traits'], cost = 2): ProjectSummary {
  return {
    locale: 'en',
    projectId: id,
    slug: id,
    title: id,
    summary: '',
    eyebrow: '',
    year: '2026',
    role: '',
    contribution: '',
    disciplines: [],
    traits,
    tools: [],
    featured: false,
    detailed: false,
    cost,
    accent: 'cyan',
    order: 1,
    draft: false,
  };
}

describe('evaluateHand', () => {
  const scenario = scenarios.en[0];

  it('solves a brief when required traits fit the card and budget limits', () => {
    const result = evaluateHand([project('sonification', ['Sound', 'Interaction'], 3)], scenario);
    expect(result.solved).toBe(true);
    expect(result.missingTraits).toEqual([]);
  });

  it('reports missing traits', () => {
    const result = evaluateHand([project('audio', ['Sound'])], scenario);
    expect(result.solved).toBe(false);
    expect(result.missingTraits).toEqual(['Interaction']);
  });

  it('rejects hands over budget or over the card limit', () => {
    expect(evaluateHand([project('one', ['Sound', 'Interaction'], 7)], scenario).overBudget).toBe(true);
    const cards = ['a', 'b', 'c', 'd'].map((id) => project(id, ['Sound', 'Interaction'], 1));
    expect(evaluateHand(cards, scenario).tooManyCards).toBe(true);
  });
});
