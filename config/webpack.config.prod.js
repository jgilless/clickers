const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const paths = require('./paths');

module.exports = {
    entry: ['./polyfills', paths.appJsIndex],
    output: {
        path: paths.dist,
        filename: 'app.js'
    },
    mode: 'production',
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
                NODE_ENV: JSON.stringify('production')
            }
        }),
        new HtmlWebpackPlugin({
            template: paths.appHtml,
            inject: true
        })
    ]
};
