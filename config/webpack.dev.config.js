const baseWebpackConfig = require('./webpack.base.config');
const merge = require('webpack-merge');

module.exports = merge(baseWebpackConfig, {
    // mode:"development"
    module: {
        rules: [
            {
                test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader']
            }]
    }
});

