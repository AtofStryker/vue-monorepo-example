var VueLoaderPlugin = require ('vue-loader').VueLoaderPlugin;
const path = require('path')

module.exports = {
  module: {
    rules: [
      {
        test: /\.vue$/,
        // exclude: /node_modules/,
        loader: 'vue-loader',
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            root: path.resolve(__dirname, "../../")
          },
        },
      },
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
      },
      {
        test: /\.styl$/,
        use: [
          {loader: 'vue-style-loader'},
          {loader: 'css-loader'},
          {loader: 'stylus-loader'},
        ],
      },
      {
        test: /\.css$/,
        use: [
          {loader: 'vue-style-loader'},
          {loader: 'css-loader'},
          {loader: 'resolve-url-loader'},
        ],
      },
      {
        test: /\.scss/,
        use: [
          {loader: 'vue-style-loader'},
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'resolve-url-loader',
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader?name=images/[name].[ext]?[hash]',
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?limit=10000&mimetype=application/font-woff&name=fonts/[name].[ext]',
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader?name=fonts/[name].[ext]',
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.vue', '.json'],
    alias: {vue$: 'vue/dist/vue.esm.js'},
  },
  plugins: [new VueLoaderPlugin ()],
};
