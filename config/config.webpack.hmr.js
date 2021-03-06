"use strict"
var webpack = require( "webpack" );
var path = require( "path" );
var LodashModuleReplacementPlugin = require('lodash-webpack-plugin');

var entries = {}
var configApplications = require("./config.applications")
for (var i = 0; i < configApplications.length; i++) {
  var appName = configApplications[i].name
  var entry = {}
  entry[ appName ] = [
    "webpack-hot-middleware/client",
    "./front-end/applications/" + appName
  ]
  Object.assign( entries, entry )
}

var defaultConfig = require( "./config.webpack.default" )
var exportConfig = Object.assign( {}, defaultConfig, {
  devtool: "eval",
  entry: entries,
  plugins: [
    new LodashModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.EnvironmentPlugin( [ "NODE_ENV" ] ),
    new webpack.HotModuleReplacementPlugin(),
  ],
  module: {
    loaders: defaultConfig.module.loaders.concat([
      {
        test: /\.styl$/,
        loaders: [
          "style-loader",
          "css-loader?modules&importLoaders=1&localIdentName=[path]-[local]",
          "stylus-loader",
        ]
      },
    ]),
    postLoaders: [
      {
        test: /\.(jsx|es6)/,
        exclude: /(node_modules|www_root\/bower)/,
        loader: "babel",
        query: {
          presets: [ "react-hmre" ]
        }
      }
    ]
  },
})

module.exports = exportConfig
