const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} =require('clean-webpack-plugin')

module.exports = {
  context: path.resolve(__dirname, 'files'),//папка по умолчанию
  mode: 'development',  
  entry: {
      main:'./index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[hash].js'
  },
  plugins: [
    new HTMLWebpackPlugin({//генерирует html
        
        template: './index.html'
    }),
    new CleanWebpackPlugin()//чистит dist
  ],
  module: {
      rules: [
          {
              test: /\.css$/,
              use: ['style-loader','css-loader'] //справа налево 
          }/*,
         // {
         //     test: /\.(png|jpg|svg|gif)$/,
         //     use: ['file-loader']
        //  }*/
      ]
  }
};