const path = require('path')
module.exprots = {
    entry: {
        index: './lib/index.tsx'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        library: 'simple-style-react-ui',
        libraryTarget: 'UMD'
    },
    module: {
        rules:[
            {
                test: /\.tsx?$/,
                loader: 'awesome-typescript-loader'
            }
        ]
    }
}