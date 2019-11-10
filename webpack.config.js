const Encore                 = require('@symfony/webpack-encore')
const HtmlWebPackPlugin      = require('html-webpack-plugin')
const TerserPlugin           = require('terser-webpack-plugin')
const path                   = require('path')

Encore
  .enableBuildNotifications(true)

  .enableSingleRuntimeChunk()

  .setOutputPath('public')
  .setPublicPath('/')
  .setManifestKeyPrefix('public/')

  .cleanupOutputBeforeBuild()

  .enableSourceMaps(!Encore.isProduction())
  .enableVersioning(Encore.isProduction())

  .addEntry('build/main', './src/js/main.js')

  .addExternals({
    three: 'THREE',
    aframe: 'AFRAME'
  })

  .enableVueLoader()
  .enableSassLoader()
  .enablePostCssLoader(function (options) {
    options.config = {
      path: path.join(__dirname, 'postcss.config.js')
    }
  })

  .configureDefinePlugin(options => {
    options.BUILD_DEBUG = JSON.stringify(!Encore.isProduction())
  })

  .configureBabel(
    function (babelConfig) {
      babelConfig.presets[0][1].targets = {
        browsers: 'last 2 versions',
      }
    },
    {
      useBuiltIns: 'usage',
      corejs: '3'
    }
  )

  .addPlugin(new HtmlWebPackPlugin({
    filename: 'index.html',
    template: path.resolve(__dirname, './src/index.html'),
    minify: {
      collapseWhitespace: true,
      removeComments: true,
      removeRedundantAttributes: true,
      removeScriptTypeAttributes: true,
      removeStyleLinkTypeAttributes: true,
      useShortDoctype: true
    },
    nodeModules: false
  }))

const config = Encore.getWebpackConfig()

if (Encore.isProduction()) {
  config.optimization = {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          output: {
            comments: false,
          },
        },
        extractComments: false,
      })
    ],
  }
}

module.exports = config
