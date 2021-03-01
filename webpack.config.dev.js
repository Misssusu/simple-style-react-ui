const base = require('./webpack.config')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = Object.assign({}, base, {
    mode: 'development',
    entry: {
      example: './example.tsx'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'simple-style-react-ui',
            template: 'index.html'
        })
    ]
})