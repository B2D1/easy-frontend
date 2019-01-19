const path = require('path');
const glob = require('glob');
const base = require('./webpack.base.js');
const { smart } = require('webpack-merge');
const PurifyCssWebpack = require('purifycss-webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin")

const pathResolve = (targetPath) => path.resolve(__dirname, targetPath);


module.exports = smart(base, {
  mode: 'production',
  devtool: 'source-map',
  output: {
    filename: 'static/js/[name].[chunkhash:7].js',
    chunkFilename: 'static/js/[name].[chunkhash:7].js'
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new PurifyCssWebpack({
      paths: glob.sync(pathResolve('src/*.html'))
    }),
    new CopyWebpackPlugin([{
      from: pathResolve('src/assets'),
      to: pathResolve('dist/static/assets')
    }]),
    new MiniCssExtractPlugin({
      filename: 'static/css/[name].[contenthash:7].css'
    })
  ],
  optimization: {
    runtimeChunk: {
      name: 'manifest'
    },
    splitChunks: {
      cacheGroups: {
        vendor: {
          chunks: "all",
          test: /[\\/]node_modules[\\/]/,
          name: "vendor",
          minChunks: 1,
          maxInitialRequests: 5,
          minSize: 0,
          priority: 100
        }
      }
    },
    minimizer: [
      new OptimizeCSSAssetsPlugin({}),
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true
      }),
    ]
  }
});