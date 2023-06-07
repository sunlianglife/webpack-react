import path from 'path'

import HtmlWebpackPlugin from 'html-webpack-plugin'
import { Configuration } from 'webpack'

const config: Configuration = {
  output: {
    publicPath: '/',
  },
  entry: './src/index.tsx',
  // 指定webpack打包时要使用的模块
  module: {
    // 指定loader加载的规则
    rules: [
      {
        test: /\.(ts|js)x?$/i,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
      favicon: 'favicon.ico',
    }),
  ],
  // 定义了扩展名之后，在import文件时就可以不用写后缀名了，会按循序依次查找
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      '@src': path.resolve(process.cwd(), '/src'),
    },
  },
}

export default config
