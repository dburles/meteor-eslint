Package.describe({
  name: 'dburles:eslint',
  version: '1.0.2',
  summary: 'The pluggable linting utility for JavaScript and JSX.',
  documentation: 'README.md',
  git: 'https://github.com/dburles/meteor-eslint.git'
});

Package.registerBuildPlugin({
  name: "eslint",
  sources: [
    'plugin/eslint.js'
  ],
  npmDependencies: {
    "eslint": "2.5.3",
    "strip-json-comments": "1.0.4"
  }
});

Package.onUse(function(api) {
  api.use('isobuild:linter-plugin@1.0.0');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('dburles:eslint');
});
