const baseWebpackConfig = require('./webpack.base.config');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = merge(baseWebpackConfig, {
    mode:"development",
    module: {
        rules: [
            {
                test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader']
            }]
    },
    devServer:{
        host:'127.0.0.1',
        port:'11111',
        contentBase: path.join(__dirname, '../hot'),
    },
    plugins:[
        new HtmlWebpackPlugin({
            title:'index',
            template:path.resolve(__dirname,'../public/index.html'),
            filename:path.resolve(__dirname,'../hot/index.html'),
        }),
        new CopyWebpackPlugin([
            {
                from:path.resolve(__dirname,'../public'),
                to:'public'
            }
        ])
    ],
    output: {
        path: path.join(__dirname, '../hot'),
        filename: 'build.js',
        // publicPath:'',
    },
});

