const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: {
    content_script: './content-scripts/App.jsx',
    background: './src/background.js',
    popup: './popup-page/App.jsx'
  },
  module: {
    rules: [
      {
        test: /\.((jsx)|(jpg))$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-react', '@babel/preset-env'],        }
      },
      {
        test: /src\.m?((js)|(jpg))$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']          }
        }
      },
      {
        test: /src\.m?((js)|(jpg))$/,
        use: {
          loader: 'file-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.css$/,
        use: [{ loader: 'style-loader' }, { loader: 'css-loader' }]
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader' // translates CSS into CommonJS
          },
          {
            loader: 'less-loader' // compiles Less to CSS
          }
        ]
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.ProgressPlugin(),
    // new CleanWebpackPlugin(),
    new CopyWebpackPlugin(
      [{ from: './popup-page/popup.html', force: true }, { from: './src/app/', force: true }],
      {}
    )
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].bundle.js'
  },
  resolve: {
    modules: ['./src/data', 'node_modules'],
    extensions: ['.js', '.jsx', '.json', '.jpg']
  }
};
