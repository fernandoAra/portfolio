/* global module */
module.exports = {
  ci: {
    collect: {
      staticDistDir: './dist',
      url: ['http://localhost/en/', 'http://localhost/en/work/tiny-fdn-reverb/', 'http://localhost/en/play/'],
      numberOfRuns: 1,
      settings: { preset: 'desktop' },
    },
    assert: {
      preset: 'lighthouse:recommended',
      assertions: {
        'categories:performance': ['error', { minScore: 0.9 }],
        'categories:accessibility': ['error', { minScore: 0.9 }],
        'categories:best-practices': ['error', { minScore: 0.9 }],
        'categories:seo': ['error', { minScore: 0.9 }],
        'unused-javascript': 'warn',
        'network-dependency-tree-insight': 'off',
        'uses-responsive-images': 'off',
      },
    },
    upload: {
      target: 'filesystem',
      outputDir: './.lighthouseci',
    },
  },
};
