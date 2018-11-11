var path = require('path');
var webpack = require('webpack');

module.exports = {
    devtool: '#source-map',
    entry: [
        './src/index'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'build.js',
        // publicPath: path.resolve(__dirname,'../dist')
    },
    plugins: [
    ],
    resolve: {
        extensions: ['.js', '.jsx','.ts','.tsx'],
        alias:{
            '@':path.resolve(__dirname,'../src')
        }
    },
    module: {
        rules: [
            {
                test:/\.tsx?$/,
                use:'ts-loader'
            },
            {
                test: /\.jsx?$/,
                use: ['babel-loader'],
                include: path.join(process.cwd(), 'src')
            }, {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                }
            },
            {
                test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                }
            }
        ]
    }
};
