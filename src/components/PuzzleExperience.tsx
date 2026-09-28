import { useEffect, useMemo, useRef, useState } from 'react';
import type { Locale } from '../lib/i18n';
import { traitLabels } from '../lib/i18n';
import type { ProjectSummary } from '../lib/projects';
import { playCue, setSoundEnabled, soundEnabled } from '../lib/audio';
import { evaluateHand, scenarios } from '../game/puzzle';
import { track } from '../lib/analytics';

interface Props { locale: Locale; projects: ProjectSummary[] }

export default function PuzzleExperience({ locale, projects }: Props) {
  const [scenarioIndex, setScenarioIndex] = useState(0);
  const [selected, setSelected] = useState<string[]>([]);
  const [showHint, setShowHint] = useState(false);
  const [sound, setSound] = useState(false);
  const stageRef = useRef<HTMLDivElement>(null);
  const controllerRef = useRef<{ update(ids: string[], solved: boolean): void; destroy(): void } | null>(null);
  const scenario = scenarios[locale][scenarioIndex];
  const selectedProjects = projects.filter((project) => selected.includes(project.projectId));
  const evaluation = useMemo(() => evaluateHand(selectedProjects, scenario), [selectedProjects, scenario]);

  useEffect(() => {
    const timer = window.setTimeout(() => setSound(soundEnabled()), 0);
    return () => window.clearTimeout(timer);
  }, []);
  useEffect(() => {
    if (!stageRef.current) return;
    let active = true;
    import('../game/PhaserStage').then(({ createPhaserStage }) => {
      if (!active || !stageRef.current) return;
      controllerRef.current = createPhaserStage(
        stageRef.current,
        projects.map((project) => ({ id: project.projectId, title: project.title, accent: project.accent })),
      );
    });
    return () => {
      active = false;
      controllerRef.current?.destroy();
      controllerRef.current = null;
    };
  }, [projects]);

  useEffect(() => {
    controllerRef.current?.update(selected, evaluation.solved);
    if (evaluation.solved) {
      playCue('success');
      track('puzzle_complete', { scenario: scenario.id });
      localStorage.setItem(`portfolio:puzzle:${scenario.id}`, 'complete');
    }
  }, [evaluation.solved, scenario.id, selected]);

  const labels = locale === 'en'
    ? { selected: 'Selected', budget: 'Complexity', missing: 'Still needed', hint: 'Show hint', reset: 'Reset hand', next: 'Next brief', open: 'Open', sound: 'Sound', choose: 'Choose up to three project cards.' }
    : { selected: 'Selecionadas', budget: 'Complexidade', missing: 'Ainda falta', hint: 'Mostrar dica', reset: 'Limpar mão', next: 'Próximo briefing', open: 'Abrir', sound: 'Som', choose: 'Escolha até três cartas de projeto.' };

  function toggle(project: ProjectSummary) {
    setSelected((current) => {
      const exists = current.includes(project.projectId);
      if (exists) return current.filter((id) => id !== project.projectId);
      if (current.length >= scenario.maxCards) return current;
      playCue('select');
      return [...current, project.projectId];
    });
  }

  function nextScenario() {
    setScenarioIndex((current) => (current + 1) % scenarios[locale].length);
    setSelected([]);
    setShowHint(false);
  }

  return (
    <div className="puzzle-app">
      <div className="puzzle-toolbar">
        <span>{scenario.label} / 03</span>
        <label className="sound-toggle">
          <input
            type="checkbox"
            checked={sound}
            onChange={(event) => { setSound(event.target.checked); setSoundEnabled(event.target.checked); }}
          />
          <span>{labels.sound}</span>
        </label>
      </div>

      <div className="puzzle-brief">
        <div>
          <p className="card-eyebrow">{scenario.label}</p>
          <h2>{scenario.title}</h2>
        </div>
        <p>{scenario.brief}</p>
      </div>

      <div ref={stageRef} className="phaser-stage" aria-hidden="true" />

      <div className="puzzle-status" aria-live="polite">
        <span>{labels.selected}: {selected.length}/{scenario.maxCards}</span>
        <span>{labels.budget}: {evaluation.cost}/{scenario.budget}</span>
        {evaluation.missingTraits.length > 0 && (
          <span>{labels.missing}: {evaluation.missingTraits.map((trait) => traitLabels[locale][trait]).join(', ')}</span>
        )}
      </div>

      <p className="puzzle-instruction">{labels.choose}</p>
      <div className="puzzle-cards">
        {projects.map((project) => {
          const isSelected = selected.includes(project.projectId);
          return (
            <button
              type="button"
              className={`puzzle-card accent-${project.accent}${isSelected ? ' is-selected' : ''}`}
              aria-pressed={isSelected}
              onClick={() => toggle(project)}
              key={project.projectId}
            >
              <span className="puzzle-card__cost">{project.cost}</span>
              <strong>{project.title}</strong>
              <span>{project.traits.map((trait) => traitLabels[locale][trait]).join(' · ')}</span>
            </button>
          );
        })}
      </div>

      {showHint && !evaluation.solved && <p className="hint-panel">{scenario.hint}</p>}
      {evaluation.solved && (
        <div className="success-panel" role="status">
          <div><span>✓</span><p>{scenario.success}</p></div>
          <div className="success-links">
            {selectedProjects.map((project) => (
              <a href={`/${locale}/work/${project.slug}/`} key={project.projectId}>{labels.open} {project.title}<span>↗</span></a>
            ))}
          </div>
        </div>
      )}

      <div className="puzzle-actions">
        <button type="button" className="button button--quiet" onClick={() => setShowHint((value) => !value)}>{labels.hint}</button>
        <button type="button" className="button button--quiet" onClick={() => setSelected([])}>{labels.reset}</button>
        {evaluation.solved && <button type="button" className="button button--primary" onClick={nextScenario}>{labels.next}<span>→</span></button>}
      </div>
    </div>
  );
}
