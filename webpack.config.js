const webpack = require('webpack');
const path = require('path');

module.exports = (
    env = {
        NODE_ENV: 'development'
    }
) => {
    return {
        entry: './src/js/index.js',
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'app.js'
        },
        module: {
            rules: [
                {
                    enforce: 'pre',
                    test: /\.(js)$/,
                    loader: 'eslint-loader',
                    include: path.resolve(__dirname, 'src/js'),
                    exclude: /node_modules/
                },
                {
                    test: /\.(js)$/,
                    loader: 'babel-loader',
                    include: path.resolve(__dirname, 'src/js'),
                    exclude: /node_modules/
                }
            ]
        },
        mode: env.NODE_ENV
    };
};
