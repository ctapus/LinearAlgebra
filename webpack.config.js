const path = require('path');
const webpack = require('webpack');
module.exports = {
    entry: {
        geneticAlgorithm: './src/exercises/geneticAlgorithm.ts',
        fractals: './src/exercises/fractals.ts',
        graph: './src/exercises/graph.ts',
        decisionTree: './src/exercises/decisionTree.ts',
        inverseMatrix: './src/exercises/inverseMatrix.ts',
        systemOfLinearEquations: './src/exercises/systemOfLinearEquations.ts',
        LUFactorization: './src/exercises/LUFactorization.ts',
        QRFactorization: './src/exercises/QRFactorization.ts',
        VectorSpaceBasis: './src/exercises/VectorSpaceBasis.ts'
    },
    devtool: 'inline-source-map',
    output: {
        path: path.resolve(__dirname, './scripts'),
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