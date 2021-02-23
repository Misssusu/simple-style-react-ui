const path = require('path')
module.exports = {
    mode: 'production',
    entry: {
        index: './lib/index.tsx'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx']
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
            },
            {
                test: /\.svg$/,
                loader: 'svg-sprite-loader'   //解析svg
            }
        ]
    }
}