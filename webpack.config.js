const path = require('path');
const CleanWebPackPlugin = require('clean-webpack-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: ['babel-polyfill', './src/index.js'],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.s?css$/,
                use: [ 'style-loader', 'css-loader', 'sass-loader' ],
                exclude: /node_modules/
            },
            {
                test: /\.svg|.png|.jpg$/,
                loader: 'url-loader',
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new CleanWebPackPlugin([ 'public' ], { root: path.resolve(__dirname)}),
        new HtmlWebPackPlugin({
            template: './src/index.html',
            favicon: './src/favicon.ico',
            inject: false
        })
    ],
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: path.resolve(__dirname, 'public'),
        compress: true,
        port: 9000
    }
};