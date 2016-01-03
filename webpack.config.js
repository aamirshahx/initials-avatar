var autoprefixer = require('autoprefixer');
var precss = require('precss');

module.exports = {
  entry: './script.js',
  output: {
    filename: 'dist/bundle.js'
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.pcss$/, loader: "style-loader!css-loader!postcss-loader"},
      { test: /\.js$/, loader: 'babel?presets[]=es2015', exclude: /(node_modules|bower_components)/}
    ]
  },
  postcss: function () {
   return [autoprefixer, precss];
  },
  resolve: {
    extensions: ['', '.js', '.css', '.pcss']
  }
};
