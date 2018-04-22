const path = require('path');
var webpack = require("webpack");
module.exports = {
    entry: './exercises/graph.ts',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.ProvidePlugin({            
            $: "jquery",
            jQuery: "jquery",
            jquery: 'jquery'
        })
    ],
    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'exercises')
    },
    devServer: {
        host: 'localhost',
        port: 3000,
        contentBase: './exercises',
        hot: true,
        open: true,
        openPage: ''
      },
};