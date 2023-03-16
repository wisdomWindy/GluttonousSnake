const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  mode:'development',
  entry:{
    index:path.resolve(__dirname, 'src', 'index.ts')
  },
  resolve:{
    extensions:['.js', '.ts'],
    alias:{
      '@':'/src'
    }
  },
  devServer:{
    hot:true,
    open:true
  },
  module:{
    rules:[{
      test:/\.ts$/,
      exclude:/node_modules/,
      use:[{
        loader:'ts-loader'
      }]
    }]
  },
  plugins:[new HTMLWebpackPlugin({
    template:path.resolve(__dirname, './', 'index.html')
  })]
}