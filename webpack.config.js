var webpack = require('webpack');
var ET = require('extract-text-webpack-plugin');
module.exports = {
  entry: {
    app: __dirname + '/src/js/app.js'
  },

  output: {
    path: __dirname + '/prd',
    filename: 'bundle.js'
  },

  devtool: 'source-map',

  devServer: {
    contentBase: __dirname,
    port: 80,
    inline: true
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel'
      },
      {
        test: /\.css$/,
        loader: 'style!css'
      },
      /*{
        test: /\.scss$/,
        loader: 'style!css!sass'
      }*/

      {
        test: /\.scss$/,
        loader: ET.extract('style', 'css!sass')
      },

      {
        test: /\.string$/,
        loader: 'file',
        query: {
          name: 'tpls/[name].[ext]'
        }
      }
    ]
  },

  plugins: [
    new ET('bundle.css')
  ]

}
