const path = require('path')
const base = require('./webpack.config')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = Object.assign({}, base, {
    mode: 'development',
    entry: {
        example: './example.tsx'
    },
    output: {
        path: path.resolve(__dirname, 'doc'),
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html'
        })
    ]
})