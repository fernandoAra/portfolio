import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';

test('browse path works and changes locale', async ({ page }) => {
  await page.goto('/en/');
  await expect(page.getByRole('heading', { level: 1 })).toContainText('systems you can feel');
  await page.getByRole('link', { name: 'Browse the work' }).click();
  await expect(page).toHaveURL(/\/en\/work\//);
  await page.getByRole('link', { name: 'Português' }).click();
  await expect(page).toHaveURL(/\/pt-BR\/work\//);
});

test('project is available by direct link', async ({ page }) => {
  await page.goto('/en/work/tiny-fdn-reverb/');
  await expect(page.getByRole('heading', { level: 1, name: /Tiny FDN Reverb/i })).toBeVisible();
  await expect(page.getByRole('link', { name: /Source repository/i })).toHaveAttribute('href', /github\.com/);
});

test('optional play launches and works without sound', async ({ page }) => {
  await page.goto('/en/play/');
  await page.locator('astro-island:not([ssr])').waitFor({ state: 'attached', timeout: 15_000 });
  await page.getByRole('button', { name: /Deal the cards/i }).click();
  await expect(page.getByText('Choose up to three project cards.')).toBeVisible({ timeout: 15_000 });
  await expect(page.getByLabel('Sound')).not.toBeChecked();
  await page.getByRole('button', { name: /What Your Data Sounds Like/i }).click();
  await expect(page.getByText('The hand connects sound to an active visitor decision.')).toBeVisible();
});

test('home page has no automatically detectable WCAG A/AA violations', async ({ page }) => {
  await page.goto('/en/');
  const results = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21aa', 'wcag22aa']).analyze();
  expect(results.violations).toEqual([]);
});
