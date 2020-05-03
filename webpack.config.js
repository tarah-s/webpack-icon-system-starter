// Webpack Plugins

const path                          = require('path');
const webpack                       = require('webpack');
const HtmlWebpackPlugin             = require('html-webpack-plugin');
const svgSpriteLoaderPlugin         = require('svg-sprite-loader/plugin');
const { CleanWebpackPlugin }        = require('clean-webpack-plugin');


var svgoConfig = JSON.stringify({
  plugins: [
    {removeDoctype: true},
    {removeTitle: true},
    {removeXMLProcInst: true},
    {removeUselessStrokeAndFill: true},
    {removeAttrs: {
        attrs: [
          'g:fill',
          'path:fill',
          'id'
        ]}
    }
  ]
});

// Webpack Loaders & Rules
module.exports = {
  mode: "development",
  entry: {
    app: './src/app.ts',
  },
  output: {
    filename: './[name].js'
  }, 
  resolve: {
    extensions: ['.ts', '.js', '.html']
  },
  module: {
    rules: [
        { test: /\.js$/, 
          exclude: /node_modules/, 
          loader: "babel-loader" 
        },
        {
          test: /\.svg$/,
          include: path.resolve(__dirname, './src/icons/set-a'),
          use: [
            {
              loader: 'svg-sprite-loader',
              options: {
                extract: true,
                spriteFilename: 'sprites/sprite-set-a.svg',
                symbolId: 'sa-[name]'
              }
            },
            {
              loader: 'svgo-loader',
              options: svgoConfig
            }
          ]
        },
        {
          test: /\.svg$/,
          include: path.resolve(__dirname, './src/icons/set-b'),
          use: [
            {
              loader: 'svg-sprite-loader',
              options: {
                extract: true,
                spriteFilename: 'sprites/sprite-set-b.svg',
                symbolId: 'sb-[name]'
              }
            },
            {
              loader: 'svgo-loader',
              options: svgoConfig
            }
          ]
        },
        {
          test: /\.svg$/,
          include: path.resolve(__dirname, './src/icons/set-c'),
          use: [
            {
              loader: 'svg-sprite-loader',
              options: {
                extract: true,
                spriteFilename: 'sprites/sprite-set-c.svg',
                symbolId: 'sc-[name]'
              }
            },
            {
              loader: 'svgo-loader',
              options: svgoConfig
            }
          ]
        }
      ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, './src/index.html')
    }),

    new svgSpriteLoaderPlugin({
      plainSprite: true
    }),
    new CleanWebpackPlugin({
      cleanStaleWebpackAssets: false,
    }),
  ],
  devServer: {
    host: '0.0.0.0',
    port: '4000',
    historyApiFallback: true,
    overlay: true,
    open: true,
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000,
    } 
  }
}
