const _ = require('lodash')
const HtmlPlugin = require('html-webpack-plugin')
const config = require('@freenit-framework/cli')

const defaultConfig = config.webpack(__dirname)

const myconfig = {
  plugins: [
    ...defaultConfig.plugins,
    new HtmlPlugin({ favicon: 'favicon.ico', template: 'index.html' }),
  ],
}

const target = process.env.BACKEND_URL
if (target) {
  myconfig.devServer.proxy = {
    '/api': { target },
  }
}

const webpackConfig = _.merge(defaultConfig, myconfig)

module.exports = webpackConfig
