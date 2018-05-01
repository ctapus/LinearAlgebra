const path = require('path');
const webpack = require('webpack');
module.exports = {
    entry: {
        graph: './exercises/graph.ts',
        inverseMatrix: './exercises/inverseMatrix.ts',
        systemOfLinearEquations: './exercises/systemOfLinearEquations.ts',
        LUFactorization: './exercises/LUFactorization.ts',
        QRFactorization: './exercises/QRFactorization.ts',
        VectorSpaceBasis: './exercises/VectorSpaceBasis.ts'
    },
    output: {
        path: path.resolve(__dirname, './exercises'),
        filename: './[name].js'
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
        new webpack.ProvidePlugin({            
            $: 'jquery',
            jQuery: 'jquery',
            jquery: 'jquery'
        })
    ],
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    devServer: {
        stats: 'errors-only',
        host: process.env.HOST,
        port: process.env.PORT,
        open: true,
        overlay: true,
        contentBase: './',
        openPage: ''
      }
};