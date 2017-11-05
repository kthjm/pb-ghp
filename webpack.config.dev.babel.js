import merge from 'webpack-merge'
import baseConfig from './webpack.config.base.babel.js'
import { DllReferencePlugin, HotModuleReplacementPlugin } from 'webpack'
import manifest from './.local/dll.manifest.json'
import { resolve } from 'path'

const PORT = 7000,
  localPath = resolve('.local')

export default merge(baseConfig, {
  output: {
    path: localPath,
    publicPath: `http://localhost:${PORT}/`
  },
  devServer: {
    port: PORT,
    contentBase: localPath,
    watchContentBase: true,
    publicPath: '/',
    overlay: true,
    compress: true,
    historyApiFallback: true,
    hot: true,
    inline: true,
    open: true
  },
  devtool: `source-map`,
  plugins: [
    new DllReferencePlugin({ manifest }),
    new HotModuleReplacementPlugin()
    // https://webpack.js.org/plugins/hot-module-replacement-plugin/
  ]
})
