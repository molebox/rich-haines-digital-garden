const withTM = require('next-transpile-modules')([
  'gsap',
  'three',
  'drei',
  'postprocessing',
]);

module.exports = withTM();

module.exports = {
  env: {},
  target: 'serverless',
};
