const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: "development",
  entry: {
    app: './src/index.tsx',
  },
  devtool: 'inline-source-map',
  devServer: {
    historyApiFallback: true,
    proxy: {
      '/api': 'http://localhost:8000'
    },
    host: '0.0.0.0',
    allowedHosts: 'all',
    static: "./dist",
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'No-code platform',
      templateContent: `
    <html>
      <body>
        <div id="app"></div>
        <div id="modal-portal"></div>
        <div id="ghost-portal"></div>
      </body>
    </html>
  `
    }),
    new NodePolyfillPlugin()
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: "/",
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.png/,
        type: "asset/resource",
      },
      {
        test: /\.s?css$/i,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.tsx?|\.jsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
      {
        test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/'
            }
          }
        ]
      },
      {
        test: /\.bin$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'url-loader',
            options: {
              encoding: false,
              mimetype: false,
              generator: (content) => {
                return content;
              }
            },
          },
        ],
      }
    ],
  },

};