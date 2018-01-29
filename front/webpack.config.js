const path = require('path');

module.exports = {
  entry: [
    './src/index.js'
  ],
  module: {
      loaders: [
        {
          test: /(\.js|\.jsx)$/,
          loader: 'babel-loader', //loader de babel
          exclude: /node_modules/,
          query: { presets: ['es2015', 'react'] }
          // a babel le tenemos que decir que transformaciones va a hacer
          //en este caso, transforma es2015 y jsx (react)
        },
        {
          test: /\.css$/,
          loader: 'style-loader!css-loader'
        },
        { 
          test: /\.(png|woff|woff2|eot|ttf|svg)$/,
          loader: 'url-loader?limit=100000'
        },
        {
          test: /\.ncss$/,
          loader: 'style-loader!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]' 
        },
      ]
  },
  output: {
    filename: "index_bundle.js",
    path: __dirname + '/dist'
  },
}