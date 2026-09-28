import { useState } from 'react';
import type { Locale } from '../lib/i18n';
import type { ProjectSummary } from '../lib/projects';
import { track } from '../lib/analytics';
import PuzzleExperience from './PuzzleExperience';

interface Props { locale: Locale; projects: ProjectSummary[] }

export default function PlayLauncher({ locale, projects }: Props) {
  const [started, setStarted] = useState(false);
  if (started) return <PuzzleExperience locale={locale} projects={projects} />;
  const english = locale === 'en';
  return (
    <div className="game-start">
      <div className="game-start__cards" aria-hidden="true">
        <span /><span /><span />
      </div>
      <div className="game-start__copy">
        <p className="card-eyebrow">{english ? 'Optional experience' : 'Experiência opcional'}</p>
        <h2>{english ? 'Build the brief' : 'Monte o briefing'}</h2>
        <p>{english
          ? 'Choose real portfolio projects whose capabilities satisfy a creative brief. Three short scenarios, no timer, no penalty.'
          : 'Escolha projetos reais cujas competências respondem a um briefing criativo. Três cenários curtos, sem tempo ou penalidade.'}</p>
        <ul>
          <li>{english ? '2–4 minutes' : '2–4 minutos'}</li>
          <li>{english ? 'Mouse, touch, or keyboard' : 'Mouse, toque ou teclado'}</li>
          <li>{english ? 'Sound remains optional' : 'O som continua opcional'}</li>
        </ul>
        <button
          className="button button--primary"
          type="button"
          onClick={() => { track('puzzle_start'); setStarted(true); }}
        >
          {english ? 'Deal the cards' : 'Distribuir as cartas'} <span aria-hidden="true">→</span>
        </button>
      </div>
    </div>
  );
}
