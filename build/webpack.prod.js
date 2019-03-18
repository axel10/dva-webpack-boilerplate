const webpack = require('webpack');
const path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const merge = require("webpack-merge");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const commonConfig = require("./webpack.base.js");

module.exports = merge(commonConfig, {
  cache: false,
  output: {
    path: path.join(__dirname, '/../dist/'),
    filename: 'js/[name].js'
  },
  optimization: {
    minimize: true
  },
  plugins: [
    new CleanWebpackPlugin(['dist'], {
      root: path.resolve(__dirname, '..')
    }),
    new CopyWebpackPlugin([{
      from: path.resolve(__dirname, '../public'),
      to: path.resolve(__dirname, '../dist/public')
    }], { ignore: ['index.html'] }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
  ],
  mode: 'production'
});
