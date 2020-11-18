const withTM = require('next-transpile-modules')([
  'gsap',
  'three',
  '@react-three/drei',
  'react-three-fiber',
  'postprocessing',
]);

module.exports = {
  env: {},
  target: 'serverless',
};
module.exports = withTM();
