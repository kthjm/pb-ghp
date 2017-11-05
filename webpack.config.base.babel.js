import { resolve } from 'path'

export default {
  context: process.cwd(),
  entry: {
    mobile: [resolve(`mobile/index.js`)],
    desktop: [resolve(`desktop/index.js`)]
  },
  output: {
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [resolve('node_modules')],
        use: [`babel-loader?cacheDirectory`]
      }
    ]
  }
}
