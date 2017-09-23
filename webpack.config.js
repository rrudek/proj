const path = require("path");
module.exports = {
    entry: ["whatwg-fetch","./js/index.jsx"],
    output: {
        filename: "js/out.js",
        path: path.join(__dirname, './')
      
    },
      devServer: {
  		inline: true,
  		contentBase: './',
  		port: 3001
		},
    watch: true,
    module: {
        loaders: [{
            test: /\.jsx$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: { presets: ['es2015', 'stage-2', 'react'] }
        }]
    }
}