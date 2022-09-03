const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve('build'),
    filename: 'src/App.js'
  },
  module: {
    rules: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ }
    ]
  },plugins: [
    new CopyWebpackPlugin([{
      from: './resume/*.*',
      to: '.',
      force:true
    }])
  ]
}