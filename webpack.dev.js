const path = require('path');
const webpack = require('webpack');
const base = require('./webpack.base.js');
const { smart } = require('webpack-merge');

const pathResolve = (targetPath) => path.resolve(__dirname, targetPath);

module.exports = smart(base, {
  mode: 'development',
  output: {
    filename: 'static/js/[name].[hash:7].js'
  },
  devServer: {
    contentBase: pathResolve('dist'),
    port: '8080',
    inline: true,
    historyApiFallback: true,
    hot: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
  ]
})