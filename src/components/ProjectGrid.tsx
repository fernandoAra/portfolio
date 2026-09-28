import { useMemo, useState } from 'react';
import type { Locale } from '../lib/i18n';
import { copy, traitLabels } from '../lib/i18n';
import type { ProjectSummary } from '../lib/projects';
import { track } from '../lib/analytics';

interface Props {
  locale: Locale;
  projects: ProjectSummary[];
  compact?: boolean;
}

const traits = ['Sound', 'Systems', 'Code', 'Visuals', 'Interaction', 'Performance'];

export default function ProjectGrid({ locale, projects, compact = false }: Props) {
  const [filter, setFilter] = useState('All');
  const t = copy[locale];
  const visible = useMemo(
    () => projects.filter((project) => filter === 'All' || project.traits.includes(filter as never)),
    [filter, projects],
  );

  return (
    <div className="collection">
      <div className="filter-row" aria-label={t.filters}>
        {[t.all, ...traits.map((trait) => traitLabels[locale][trait])].map((label, index) => {
          const value = index === 0 ? 'All' : traits[index - 1];
          return (
            <button
              className={filter === value ? 'filter-chip is-active' : 'filter-chip'}
              type="button"
              aria-pressed={filter === value}
              onClick={() => setFilter(value)}
              key={value}
            >
              {label}
            </button>
          );
        })}
      </div>
      <div className={compact ? 'project-grid project-grid--compact' : 'project-grid'}>
        {visible.map((project, index) => (
          <article className={`project-card accent-${project.accent}`} key={project.projectId}>
            <a
              className="project-card__link"
              href={`/${locale}/work/${project.slug}/`}
              onClick={() => track('project_view', { project: project.projectId })}
            >
              <div className="card-index" aria-hidden="true">{String(index + 1).padStart(2, '0')}</div>
              <div className="card-art" aria-hidden="true">
                <span className="card-orbit" />
                <span className="card-signal" />
                <span className="card-node" />
              </div>
              <div className="card-content">
                <p className="card-eyebrow">{project.eyebrow}</p>
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
                <ul className="trait-list" aria-label={locale === 'en' ? 'Capabilities' : 'Competências'}>
                  {project.traits.slice(0, 4).map((trait) => (
                    <li key={trait}>{traitLabels[locale][trait]}</li>
                  ))}
                </ul>
                <span className="card-action">{t.cardOpen} <span aria-hidden="true">↗</span></span>
              </div>
            </a>
          </article>
        ))}
      </div>
    </div>
  );
}
