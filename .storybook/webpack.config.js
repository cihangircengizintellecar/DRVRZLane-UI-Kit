// you can use this file to add your custom webpack plugins, loaders and anything you like.
// This is just the basic way to add additional webpack configurations.
// For more information refer the docs: https://storybook.js.org/configurations/custom-webpack-config

// IMPORTANT
// When you add this file, we won't add the default configurations which is similar
// to 'React Create App'. This only has babel loader to load JavaScript.
const path = require('path');
const webpack = require('webpack');

module.exports = {
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [
      'node_modules',
      path.resolve(__dirname, '../'),
      path.resolve(__dirname, '../assets/fonts')
    ]
  },

  plugins: [
    new webpack.ProgressPlugin(),
  ],
  module: {
    rules: [
    {
      test: /\.stories\.jsx?$/, exclude: /node_modules/,
      use: [{
        loader: require.resolve('@storybook/addon-storysource/loader')
      }]
    },
    {
      test: /\.jsx?$/, exclude: /node_modules/,
      use: [{
        loader: 'babel-loader',
        options: {
          presets: ['es2015', 'react', 'stage-0']
        }
      }],
    }, {
      test: /\.eot(\?v=\d+.\d+.\d+)?$/,
      use: [{
        loader: 'file-loader'
      }]
    }, {
      test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      use: [{
        loader: 'url-loader',
        options: {
          limit: '100000',
          mimetype: 'application/font-woff'
        }
      }]
    }, {
      test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
      use: [{
        loader: 'url-loader',
        options: {
          limit: '100000',
          mimetype: 'application/octet-stream'
        }
      }]
    }, {
      test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
      use: [{
        loader: 'url-loader',
        options: {
          limit: '100000',
          mimetype: 'image/svg+xml'
        }
      }]
    }, {
      test: /\.scss$/,
      use: [{
        loader: 'style-loader' // creates style nodes from JS strings
      }, {
        loader: 'css-loader', // translates CSS into CommonJS
        options: {
          sourceMap: true,
          '-minimize': true,
          'modules': true,
          importLoaders: 1,
          localIdentName: '[name]__[local]__[hash:base64:6]'
        }
      }, {
        loader: 'sass-loader', // compiles Sass to CSS
        options: {
          sourceMap: true
        }
      }]
    }, {
      test: /\.svg$/,
      loader: 'svg-inline-loader'
    }, {
      test: /\.(jpe?g|png|gif|ico)$/i,
      use: [{
        loader: 'url-loader?limit=10000'
      }, {
        loader: 'img-loader'
      }]
    }]
  },
};