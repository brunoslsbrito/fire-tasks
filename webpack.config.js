import darkTheme from '@ant-design/dark-theme';

const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        modifyVars: darkTheme,
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { '@primary-color': '#E21478' },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
