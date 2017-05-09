const path = require('path');
const webpack = require('webpack')
const CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin')
const ExtractWebpackPlugin = require('extract-text-webpack-plugin')

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
            // {
            // test: /\.css$/,
            /* include: [
             path.resolve(__dirname)
             ],
             exclude: [
             path.resolve(__dirname, 'node_modules')
             ],*/
            // loader: 'style-loader!css-loader',
            //include: path.join(__dirname, 'src')
            // },
            {
                test: /\.js$/,
                loader: 'babel-loader',
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
            filename:'js/vendor.bundle.js',
            minChunks: Infinity
        }),
        new ExtractWebpackPlugin('styles.css')
    ],
    devtool: 'eval-source-map'

    /* resolve: {
     extensions: ['.json', '.js', '.jsx', '.css']
     },*/
};