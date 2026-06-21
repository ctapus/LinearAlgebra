import path from "node:path";
import { fileURLToPath } from "url";
import webpack from "webpack";
import "webpack-dev-server";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const config: webpack.Configuration = {
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
        VectorSpaceBasis: './src/exercises/VectorSpaceBasis.ts',
        ulamSpiral: './src/exercises/ulamSpiral.ts'
    },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    filename: './[name].js',
    path: path.resolve(__dirname, "./public/scripts"),
    clean: true
  },
  devtool: "inline-source-map",
  devServer: {
    host: process.env.HOST,
    port: process.env.PORT,
    client: {
        overlay: true,
    },
    open: ['/index.html'],
    hot: true
}
};
export default config;