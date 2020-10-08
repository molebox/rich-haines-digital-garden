const withTM = require('next-transpile-modules');

module.exports = withTM({
  transpileModules: ['gsap'],
});

module.exports = {
  env: {},
  target: 'serverless',
};
