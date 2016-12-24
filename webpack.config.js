 const webpack = require('webpack');

var entries = [
	'./js/app.js',
	'./js/app.controller.js',
	'./js/blueimp-upload-wistia.js'
]

 module.exports = {
 	entry: entries,
 	output: {
 		path: './bin',
 		filename: 'app.bundle.js'
 	}
 };