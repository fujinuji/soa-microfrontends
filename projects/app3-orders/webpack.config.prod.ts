import webpackConfig from './webpack.config';
import {Configuration} from 'webpack';

export const prodWebpackConfig: Configuration = {
  ...webpackConfig,
  output: {
    // publicPath: 'https://module-federation-app3.web.app/', // production server,
    publicPath: 'https://localhost:4205/', // production server,
    uniqueName: 'orders',
  },
};

export default prodWebpackConfig;
