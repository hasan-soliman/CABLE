/** @returns {import('webpack').Configuration} Webpack Configuration */

const { GenerateSW } = require('workbox-webpack-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')

module.exports = (config, { mode }) => {
  if (mode === 'development') {
    // Add dev plugin
  }

  if (mode === 'production') {
    config.devtool = false
    config.optimization = {
      minimizer: [new CssMinimizerPlugin(), new TerserPlugin({ extractComments: false })],
    }
  }

  // Add custom rules for your project
  // config.module.rules.push(YOUR_RULE)

  // Add custom plugins for your project
  config.plugins.push(
    new GenerateSW({
      swDest: 'sw.js',
      cleanupOutdatedCaches: true,
      exclude: [
        /api/,
        /\.map/,
        /\.txt/,
        /\.DS_Store/,
        /\.md/
      ],
      clientsClaim: true,
      skipWaiting: true,
      runtimeCaching: [{
        urlPattern: /\.(?:json)$/,
        handler: 'CacheFirst',
        options: {
          cacheName: 'api',
        },
      }]
    })
  )

  return config
}
