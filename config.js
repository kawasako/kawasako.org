var webpack = require('webpack');

module.exports = {
  src: './src',
  dest: './build',

  webpack: {
    entry: './src/js/main.js',
    output: {
      filename: '[name].js'
    },
    resolve: {
      extensions: ['', '.js'],
      modulesDirectories: ['./node_modules'],
      alias: { }
    },
    plugins: [
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.AggressiveMergingPlugin()
    ],
    module: {
      loaders: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel'
        }
      ]
    }
  }
};