const path = require("path");
const webpack = require("webpack");

module.exports = function override(config, env) {
  config.resolve.fallback = {
    buffer: require.resolve("buffer/"),
    stream: require.resolve("stream-browserify"),
    crypto: require.resolve("crypto-browserify"),
    os: require.resolve("os-browserify/browser"),
    path: require.resolve("path-browserify"),
  };

  config.plugins = (config.plugins || []).concat([
    new webpack.ProvidePlugin({
      Buffer: ["buffer", "Buffer"],
    }),
  ]);

  return config;
};
