const path = require('path');
const webpack = require('webpack');
module.exports = {
    entry: {
        BooleanEvaluator: './src/structures/BooleanEvaluator.ts',
        imageProcessing: './src/exercises/imageProcessing.ts',
        markovChain: './src/exercises/markovChain.ts',
        gameOfLife: './src/exercises/gameOfLife.ts',
        artificialNeuralNetwork: './src/exercises/artificialNeuralNetwork.ts',
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
                use: 'babel-loader',
                exclude: /node_modules/
            },
            {
              test: /\.js$/,
              use: ["source-map-loader"],
              enforce: "pre"
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
        open: false,
        overlay: true,
        contentBase: './',
        openPage: '',
        hot: true
      }
};