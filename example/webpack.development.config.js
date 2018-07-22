const path = require('path');

module.exports = {
  devServer: {
    contentBase: 'client',
    historyApiFallback: true,
  },
  entry: {
    main: [
      path.resolve(__dirname, 'client/assets/js/index'),
      path.resolve(__dirname, 'client/assets/css/style.css'),
    ],
  },
  output: {
    filename: 'assets/js/[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
        ],
      },
    ],
  },
};
