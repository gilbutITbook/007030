const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.js?/,
        use: 'babel-loader',
      },
    ],
  },
  output: {
    filename: 'build/bundle.js',
    path: path.resolve(__dirname),
  },
};
