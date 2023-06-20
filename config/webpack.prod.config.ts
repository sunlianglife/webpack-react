import { CleanWebpackPlugin } from 'clean-webpack-plugin'
import { Configuration } from 'webpack'
import { merge } from 'webpack-merge'

import { pathToRoot } from '../utils'

import baseConfig from './webpack.base.config'

const config: Configuration = merge(baseConfig, {
  mode: 'production',

  output: {
    path: pathToRoot('./output'),
    filename: '[name].[contenthash:8].js',
    chunkFilename: '[name].[contenthash:8].js',
    publicPath: '',
  },

  devtool: false,

  plugins: [new CleanWebpackPlugin()],
})

export default config
