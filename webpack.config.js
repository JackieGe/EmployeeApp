const path = require('path');
const webpack = require('webpack');
const CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');
const ExtractWebpackPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: "./src/app.js",
        vendor: ["angular"]
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'js/[name].bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader!eslint-loader',
                exclude: /node_modules/
                //include: path.join(__dirname, 'src'),
            },
            {
                test:/\.html$/,
                loader: 'html-loader'
            },
            {
                test:/\.css$/,
                loader: ExtractWebpackPlugin.extract({
                    fallback:'style-loader',
                    use:'css-loader'
                })
            }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name:'vendor',
            filename:'js/[name].bundle.js',
            minChunks: Infinity
        }),
        new ExtractWebpackPlugin('css/[name].css'),
        new HtmlWebpackPlugin({
            filename:'index.html',
            template:path.join(__dirname,'src/index.html'),
            inject:'body',
            hash: true,
            chunks: ['app', 'vendor']
        })
    ],
    devtool: 'eval-source-map'

    /* resolve: {
     extensions: ['.json', '.js', '.jsx', '.css']
     },*/
};