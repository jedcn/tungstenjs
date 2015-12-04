var webpack = require('webpack');
var webpackSettings = require('./webpack-helper');

module.exports = webpackSettings.withBabel({
  entry: {
    'backbone': './adaptors/backbone',
    'ampersand': './adaptors/ampersand',
    'core': './tungsten',
    'template': ['./precompile/tungsten_template/template_helper.js']
  },
  output: {
    filename: './dist/tungsten.[name].js',
    libraryTarget: 'umd',
    library: ['tungsten', '[name]']
  },
  resolve: {
    alias: {
      jquery: 'backbone.native'
    }
  },
  externals: [
    {underscore: 'var window._'},
    {lodash: 'var window._'}
  ],
  resolveLoader: {
    modulesDirectories: ['node_modules']
  },
  module: {
    loaders: []
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('./dist/tungsten.core.js')
  ]
});
