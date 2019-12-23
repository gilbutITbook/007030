const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  // START:module
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
      {
        test: /\.js?/,
        use: 'babel-loader',
      },
    ],
  },
  //  END:module
  output: {
    filename: 'build/bundle.js',
    path: path.resolve(__dirname),
  },
};
