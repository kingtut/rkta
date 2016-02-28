"use strict"
var webpack              = require( "webpack" );
var StatsWriterPlugin    = require("webpack-stats-plugin").StatsWriterPlugin;
var ExtractTextPlugin    = require("extract-text-webpack-plugin");

var applications = []
var entries = {}
var configApplications = require("./config.applications")
for (var i = 0; i < configApplications.length; i++) {
  var appName = configApplications[i].name
  var entry = {}
  entry[ appName ] = [
    "./app/" + appName // + "/app"
  ]
  Object.assign( entries, entry );
}

var defaultConfig = require( "./config.webpack.default" )
var exportConfig = Object.assign( {}, defaultConfig, {
  // devtool: "cheap-module-source-map",
  entry: entries,
  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      "process.env": {
        "NODE_ENV": JSON.stringify( process.env.NODE_ENV )
      }
    }),
    new ExtractTextPlugin("[name].css", {
      allChunks: true
    }),
    new StatsWriterPlugin({
      chunkModules: true,
      filename: "../../build/stats.json",
      fields: [ "hash", "version", "errorDetails" ]
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false },
      sourceMap: false,
    }),
  ],
  module: {
    loaders: defaultConfig.module.loaders.concat([
      {
        test: /\.styl$/,
        loader: ExtractTextPlugin.extract( "css-loader!stylus-loader" ),
      },
    ]),
    postLoaders: [
      {
        test: /\.(jsx|es6)/,
        exclude: /(node_modules|www_root\/bower)/,
        loader: "babel",
      }
    ]
  },
})

module.exports = exportConfig
