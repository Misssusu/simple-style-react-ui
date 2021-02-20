const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    mode: 'production',
    entry: {
        index: './lib/index.tsx'
    },
    output: {
        path: path.resolve(__dirname, 'dist/lib'),
        library: 'simple-style-react-ui',
        libraryTarget: 'umd'
    },
    module: {
        rules:[
            {
                test: /\.tsx?$/,
                loader: 'awesome-typescript-loader'   //将ts转为js
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'simple-style-react-ui',
            template: 'index.html'
        })
    ]
}