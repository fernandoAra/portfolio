import { getCollection, type CollectionEntry } from 'astro:content';
import type { Locale } from './i18n';

export type ProjectEntry = CollectionEntry<'projects'>;
export type ProjectSummary = ProjectEntry['data'];

export async function getProjects(locale: Locale) {
  return (await getCollection('projects', ({ data }) => data.locale === locale && !data.draft)).sort(
    (a, b) => a.data.order - b.data.order,
  );
}

export async function getProject(locale: Locale, slug: string) {
  const projects = await getProjects(locale);
  return projects.find(({ data }) => data.slug === slug);
}
