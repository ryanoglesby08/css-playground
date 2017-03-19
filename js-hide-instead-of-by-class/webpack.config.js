const path = require('path');

module.exports = {
  entry: {
    bad: path.join(__dirname, 'src-bad', 'bad.js'),
    good: path.join(__dirname, 'src-good', 'good.js')
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      {test: /\.js$/, use: 'babel-loader', exclude: path.join(__dirname, 'node_modules')}
    ]
  }
};
