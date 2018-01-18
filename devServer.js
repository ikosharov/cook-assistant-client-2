const webpack = require('webpack')
const middleware = require('webpack-dev-middleware')
const config = require('./webpack.config')
const compiler = webpack(config)
const express = require('express')
const app = express()

app.use(middleware(compiler, {
  stats: {
    colors: true,
    reasons: false,
    chunks: false
  },
  publicPath: config.output.publicPath,
  hot: true,
  watchOptions: {
    aggregateTimeout: 300,
    poll: 1000
  }
}))
app.use(express.static('dist'))

app.listen(3000, function () {
  console.log('listening on 3000')
})