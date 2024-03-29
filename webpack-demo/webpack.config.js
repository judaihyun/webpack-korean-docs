const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode:'development',
    entry: {
        index: './src/index.js',
    },
    output: {
        filename: '[name].bundle.js',
        chunkFilename:'[name].bundle.js',
        publicPath: 'dist/',
        path: path.resolve(__dirname, 'dist'),
    },
    plugins:[
        new CleanWebpackPlugin(),
    ]
};