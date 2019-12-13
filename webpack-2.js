const path = require('path');
// const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

const config = {
  mode: 'development',
  cache: false,
  context: path.resolve(__dirname, 'packages/app'),
  resolve: {
    extensions: ['.ts', '.js'],
  },
  devtool: 'cheap-source-map',
  module: {
    rules: [
      // {
      //   loader: 'thread-loader',
      //   options: {
      //     workers: ForkTsCheckerWebpackPlugin.ONE_CPU_FREE,
      //     poolTimeout: Infinity,
      //   },
      // },
      {
        test: /\.ts$/,
        exclude: /^(node_modules|build|dist)/,
        loader: 'ts-loader',
        options: {
          // happyPackMode: true,
          // transpileOnly: true,
          configFile: path.resolve(__dirname, 'packages/app/tsconfig.json'),
        },
      },
    ],
  },
  entry: {
    app: path.resolve(__dirname, 'packages/app/src/index.ts'),
  },
  output: {
    pathinfo: false,
    path: path.resolve(__dirname, 'build'),
    filename: '[name].bundle.js',
  },
  // plugins: [
  //   new ForkTsCheckerWebpackPlugin({
  //     formatter: 'codeframe',
  //     reportFiles: ['packages/app/src/**/*.{ts,js}'],
  //     checkSyntacticErrors: true,
  //     tsconfig: path.resolve(__dirname, 'packages/app/tsconfig.json'),
  //   }),
  // ],
  watch: true,
};

module.exports = config;
