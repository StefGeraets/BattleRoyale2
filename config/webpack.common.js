const path = require("path");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: "./src/index.js",

  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "bundle.js",
  },

  module: {
    rules: [
      // JS rules
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          process.env.NODE_ENV !== 'production'
            ? 'style-loader'
            : MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      },
      // Font rules
      {
        test: /\.(woff|woff2|ttf|otf|eot)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              outputPath: "fonts",
            },
          },
        ],
      },
    ],
  },

  resolve: {
    alias: {
      '@app': path.resolve(__dirname, '../src/js'),
      '@scss': path.resolve(__dirname, '../src/scss'),
      '@assets': path.resolve(__dirname, '../src/assets')
    }
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: "main.css",
    }),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: "index.html",
      title: "BattleRoyale",
      template: "./src/index.html",
      favicon: "./src/favicon.ico",
    }),
    new CopyPlugin({
      patterns: [{ from: 'src/assets', to: 'assets' }]
    }),
  ],
};
