// you can use this file to add your custom webpack plugins, loaders and anything you like.
// This is just the basic way to add additional webpack configurations.
// For more information refer the docs: https://storybook.js.org/configurations/custom-webpack-config

// IMPORTANT
// When you add this file, we won't add the default configurations which is similar
// to "React Create App". This only has babel loader to load JavaScript.

const path = require('path')
const precss = require('precss');
const autoprefixer = require('autoprefixer');

const appSrc = path.resolve(__dirname, "../src")
const webpackConfig = require('../webpack/webpack.config.js')

module.exports = {
  resolve: webpackConfig.resolve,
  // plugins: webpackConfig.plugins,
  module: {
    rules: webpackConfig.module.rules.slice(1)
  },
  optimization: {
    minimize: false
  }
}
