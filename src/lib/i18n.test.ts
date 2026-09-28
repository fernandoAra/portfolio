import { describe, expect, it } from 'vitest';
import { isLocale, localizePath } from './i18n';

describe('locale helpers', () => {
  it('recognizes only supported locales', () => {
    expect(isLocale('en')).toBe(true);
    expect(isLocale('pt-BR')).toBe(true);
    expect(isLocale('fr')).toBe(false);
  });

  it('switches locale without changing the rest of the path', () => {
    expect(localizePath('/en/work/tiny-fdn-reverb/', 'pt-BR')).toBe('/pt-BR/work/tiny-fdn-reverb/');
    expect(localizePath('/pt-BR/', 'en')).toBe('/en/');
  });
});
