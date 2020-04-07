/*
 * PageName: 页面
 * Version: v1.0.
 * Autor: 张胜
 * Date: 2020-04-03 15:22:00
 * LastEditTime: 2020-04-03 16:52:00
 * Description:  开发环境
 */
const path = require('path')
const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const webpack = require('webpack')
const theme = require('./src/theme')

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        hot: true,
        port: 9000,
        overlay: {
            warnings: false,
            errors: true
        }
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),   //启用HMR,配合server的hot
    ],
    module: {
        rules: [
            {
                test:/\.css$/,
                use:[
                  'style-loader',
                  'css-loader',
                  'postcss-loader'
                ]
            },
            {
                test: /\.less$/,
                use: [
                  'style-loader',
                  'css-loader',
                  'postcss-loader',
                  {
                    loader: 'less-loader',
                    options: {'modifyVars':theme,'javascriptEnabled': true}
                  }
                ]
            }
        ]
    }
})