const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        },
        {
          test: /\.html$/,
          use: [
            {
              loader: "html-loader",
              options: { minimize: true }
            }
          ]
        },
        {
          test: /\.css$/,
          use:  [  'style-loader', MiniCssExtractPlugin.loader, 'css-loader']
        }
      ]
    },
    plugins: [
      new HtmlWebPackPlugin({
        template: "./src/index.html",
        filename: "./index.html"
      }),

     // copy assets folder to access file from html or as http request
//  new CopyWebpackPlugin([{
//   from: './src/assets',
//   to: path.resolve(__dirname, './build/assets')
// }]),


      new MiniCssExtractPlugin({
        filename: 'style.css',
        
      })
    ]
  };