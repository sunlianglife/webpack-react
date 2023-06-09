import path from 'path'

import { Configuration, HotModuleReplacementPlugin } from 'webpack'
import type { Configuration as DevServerConfig } from 'webpack-dev-server'
import { merge } from 'webpack-merge'

import baseConfig from './webpack.base.config'

const devServer: DevServerConfig = {
  static: path.join(__dirname, 'build'),
  historyApiFallback: true,
  port: 3000,
  open: true,
}

const config: Configuration = merge(baseConfig, {
  mode: 'development',
  plugins: [new HotModuleReplacementPlugin()],
  devtool: 'inline-source-map',
  devServer,
})

export default config
