const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const paths = require('./paths');
const webpackServeConfig = require('./webpack-serve.config');

module.exports = {
    entry: ['./polyfills', paths.appJsIndex],
    output: {
        pathinfo: true,
        path: paths.dist,
        filename: 'app.js'
    },
    mode: 'development',
    devtool: 'source-map',
    module: {
        rules: [
            {
                enforce: 'pre',
                test: /\.(js)$/,
                loader: 'eslint-loader',
                include: paths.appJs,
                exclude: /node_modules/
            },
            {
                test: /\.(js)$/,
                loader: 'babel-loader',
                include: paths.appJs,
                exclude: /node_modules/
            },
            {
                test: /\.(html)$/,
                loader: 'html-loader'
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('development')
            }
        }),
        new HtmlWebpackPlugin({
            template: paths.appHtml,
            inject: true
        })
    ],
    serve: webpackServeConfig
};
