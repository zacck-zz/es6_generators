'use strict'
module.exports = {
  entry: './promise_async.js',
  output: {
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test:/\.js$/,
        use:[{
          loader: 'babel-loader',
          options: {presets: ['es2015']}
        }]
      }
    ]
  }
}
