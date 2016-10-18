'use strict';

let path = require('path');
let webpack = require('webpack');
let baseConfig = require('./base');
let defaultSettings = require('./defaults');

// Add needed plugins here
let BowerWebpackPlugin = require('bower-webpack-plugin');

let config = Object.assign({}, baseConfig, {
  entry: [
    'webpack-dev-server/client?http://127.0.0.1:' + defaultSettings.port,
    'webpack/hot/only-dev-server',
    './src/index'
  ],
  cache: true,
  devtool: 'eval-source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new BowerWebpackPlugin({
      searchResolveModulesDirectories: false
    })
  ],
  module: defaultSettings.getDefaultModules()
});

// Add needed loaders to the defaults here
config.module.loaders.push(
  {
    test: /\.(js|jsx)$/,
    loader: 'react-hot!babel-loader',
    include: [].concat(
      config.additionalPaths,
      [ path.join(__dirname, '/../src') ]
    )
  },
  // {
  //   test: /\.styl$/,
  //   loader: 'style-loader!css-loader!stylus-loader',
  //   include: [].concat(
  //     config.additionalPaths,
  //     [ path.join(__dirname, '/../src') ]
  //   )
  // },
  {
    test: /\.(woff2?|ttf|eot|svg|otf)$/,
    loader: 'url?limit=10000',
    include: [].concat(
      config.additionalPaths,
      [ path.join(__dirname, '/../src') ]
    )
  }
);

config.module.resolve = {
  extensions: ['', '.js', '.styl']
}

module.exports = config;
