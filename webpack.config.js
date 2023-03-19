const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  mode:'production',
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
    open:true,
    host:'127.0.0.1',
    port:8089
  },
  optimization:{
    splitChunks:{
      chunks:'all'
    }
  },
  module:{
    rules:[{
      test:/\.ts$/,
      exclude:/node_modules/,
      use:[{
        loader:'babel-loader',
        options:{
          presets:['@babel/preset-env']
        }
      },{
        loader:'ts-loader'
      }]
    },{
      test:/\.less$/,
      exclude:/node_modules/,
      use:[
        'style-loader',
        'css-loader',
        {
          loader:'postcss-loader',
          options:{
            postcssOptions:{
              plugins:[
                [
                  'postcss-preset-env',
                  {
                    browsers:'last 2 versions'
                  }
                ]
              ]
            }
          }
        },
        'less-loader'
      ]
    }]
  },
  plugins:[new HTMLWebpackPlugin({
    template:path.resolve(__dirname, './', 'index.html'),
    minify:{
      collapseWhitespace:true,
      removeComments:true
    }
  })]
}