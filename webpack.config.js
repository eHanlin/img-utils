var webpack = require('webpack')
var path = require('path');
var entry = ['./src/index'];

if (process.env.NODE_ENV === undefined) {
  entry.unshift('webpack/hot/only-dev-server');
  entry.unshift('webpack-dev-server/client?http://localhost:8080');
}

module.exports = { 
  devtool: 'cheap-module-eval-source-map',
  entry: entry,
  output: {
    path: path.join(__dirname, 'build'),
    libraryTarget:'umd',
    library:'imgUtils',
    filename: 'bundle.js'
  },  
  externals: {
  },
  resolve: {
    alias: {
    }
  },
  plugins: [

  ],  
  node:{
    setImmediate:false
  },
  module: {
    loaders: [
      {  
        test: /\.js$/,
        loaders: [ 'babel-loader' ],
        exclude: /node_modules/,
        include: __dirname
      }
    ] 
  }   
}    

