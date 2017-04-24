/*
 * note use of commonJS, not ES6 for imports and exports in this file,
 * cuz this is only going to be run in node,
 * and we could run this through babel, but it's like 5 more steps,
 * just to avoid the commonJS syntax, so no.
 *
 */

// path is node module that helps resolve paths, so you don't have to do it by hand
const path = require('path')

module.exports = {
  // this lets webpack know that whenever we run this command from anywhere inside this project, go back to the root directory.
  context: __dirname,
  entry: './js/ClientApp.js',
  // debugging tool. could also use 'source-map' to see full source map, but takes longer to build.
  devtool: 'eval',
  output: {
    path: path.join(__dirname, '/public'),
    filename: 'bundle.js'
  },
  resolve: {
    // if no file type is given in a require statement, this is the progression of file names webpack will go through before it gives up.
    // eg import Bar from ./Bar => 1. is there a file Bar with no extension? 2. is there a file Bar.js? 3. is there a file Bar.json? if no, then give up.
    extensions: ['.js', '.json']
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: true
  },
  // all the transforms that we want webpack to apply
  module: {
    // if it passes this rule, then apply this transformation. rules = series of objects.
    rules: [
      {
        // auto linting: run this loader before any build process - we don't want to lint the output, we want to lint the input
        enforce: 'pre',
        test: /\.js$/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      },
      {
        // rathern than excluding node_modules (exclude: /node_modules/), we'll specify exactly what we want to include
        // if a file is not specifically in the js directory, don't run it through babel.
        include: path.resolve(__dirname, 'js'),
        // test to see if a file is going to be included or not. here we use regex to include all .js files.
        test: /\.js$/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            // allows webpack to read and understand css
            loader: 'css-loader',
            // do not bundle images in bundle.js
            options: {
              url: false
            }
          }
        ]
      }
    ]
  }
}
