var path = require('path');

var entryPath = path.join(__dirname, 'src');
var outputPath = path.join(__dirname, 'dist');

module.exports = {
  entry: path.join(entryPath, 'app.js'),
  output: {
    filename: 'bundle.js',
    path: outputPath
  },
  module: {
    rules: [
      {
        test: /.(js|jsx)$/,
        exclude: /node_modules/,
        loaders: 'babel-loader'
      },
      {
        test: /.(css|scss|sass)$/,
        exclude: /node_modules/,
        loaders: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  devServer: {
    contentBase: outputPath,
    historyApiFallback: true
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
}