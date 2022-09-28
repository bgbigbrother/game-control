const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    main: './src/js/main.js',
  },
  target: 'web',
  mode: 'development',
  //mode: 'production',
  devtool: 'source-map',
  devServer: {
    contentBase: path.join(__dirname, 'src'),
    watchContentBase: true,
    host: "0.0.0.0",
    disableHostCheck: true,
    proxy: {
      '/ws': {
         target: 'ws://localhost:8088',
         changeOrigin: true,
         ws: true // important
      },
      '/API': {
        target: 'http://bgvm-tvh-06.milestone.dk',
        secure: false,
      },
      '/idp': {
        target: 'http://bgvm-tvh-06.milestone.dk',
        secure: false,
      }
    },
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
    }
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'public'),
    clean: true,
  },
  plugins: [new HtmlWebpackPlugin({
    template: './src/index.html'
  })],
  module: {
    rules: [
      {
        test: /\.css$/i,
        exclude: /(node_modules|bower_components)/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ],
  },
};
