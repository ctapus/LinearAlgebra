const path = require('path');
var webpack = require("webpack");
module.exports = {
    entry: {
        graph: './exercises/graph.ts',
        inverseMatrix: './exercises/inverseMatrix.ts',
        systemOfLinearEquations: './exercises/systemOfLinearEquations.ts',
        LUFactorization: './exercises/LUFactorization.ts',
        QRFactorization: './exercises/QRFactorization.ts'
    },
    output: {
        path: path.resolve(__dirname, 'exercises'),
        filename: '[name].js'
    },
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
    devServer: {
        host: 'localhost',
        port: 3000,
        contentBase: './',
        hot: true,
        open: true,
        openPage: ''
      }, 
      watch: true
};