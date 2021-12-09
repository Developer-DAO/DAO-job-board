const path = require('path');

const toPath = (_path) => path.join(process.cwd(), _path);

module.exports = {
  addons: [
    {
      name: '@storybook/addon-docs',
      options: {
        configureJSX: true,
      },
    },
  ],
  stories: ['../**/*.stories.tsx'],
  webpackFinal: async (config) => {
    const emotionPath = toPath('../../node_modules/@emotion/react');
    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          '@emotion/core': emotionPath,
          'emotion-theming': emotionPath,
        },
      },
    };
  },
};
