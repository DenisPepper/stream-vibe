import postcssPxToRem from 'postcss-pxtorem';

const usePxToRem = () =>
  postcssPxToRem({
    propList: ['*'],
    mediaQuery: true,
  });

export default ({ env }) => {
  let plugins = [];

  if (env === 'production') plugins.push(usePxToRem());

  return { plugins };
};
