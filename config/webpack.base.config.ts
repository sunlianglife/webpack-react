import path from 'path'

import * as dotenv from 'dotenv'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import { Configuration, DefinePlugin } from 'webpack'

import { pathToRoot } from '../utils'

const isProd = () => process.env.NODE_ENV === 'prod'
const isUat = () => process.env.NODE_ENV === 'uat'

let envFile = '.dev'
if (isProd()) {
  envFile = '.prod'
} else if (isUat()) {
  envFile = '.uat'
}

dotenv.config({ path: pathToRoot('env', envFile) })

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
    new DefinePlugin({
      API_HOST: JSON.stringify(process.env.API_HOST ?? 'http://127.0.0.1'),
      BASE_URL: JSON.stringify(process.env.BASE_URL),
      ROUTER_BASE: JSON.stringify(process.env.ROUTER_BASE ?? '/'),
    }),
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
