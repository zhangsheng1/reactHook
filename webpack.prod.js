/*
 * PageName: 页面
 * Version: v1.0.
 * Autor: 张胜
 * Date: 2020-04-03 15:23:50
 * LastEditTime: 2020-04-03 18:27:25
 * Description: 
 */
const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const theme = require('./src/theme')

module.exports = merge(common, {
    mode: 'production',
    devtool: 'source-map',
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[chunkhash:8].css',
        }),
    ],
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: false,
                sourceMap: false,
                uglifyOptions:{
                    output: {
                        ascii_only: true
                    }
                }
            }),
            new OptimizeCSSAssetsPlugin({})
        ],
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {

                        }
                    },
                    'css-loader',
                    'postcss-loader'
                ]
            },
            {
                test: /\.less$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {

                        }
                    },
                    'css-loader',
                    'postcss-loader',
                    {
                        loader: 'less-loader',
                        options: {'modifyVars':theme,'javascriptEnabled': true}
                    }
                ]
            }
        ]
    },
    performance: {
        hints: false
    }
})

