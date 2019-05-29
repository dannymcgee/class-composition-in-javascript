module.exports = {
	entry: './src/main.js',
	devtool: 'inline-source-map',
	mode: 'development',
	module: {
		rules: [
			{
				test: /\.m?js$/,
				exclude: '/node_modules/',
				use: {
					loader: 'babel-loader',
					options: {
						presets: [ '@babel/preset-env' ],
						plugins: [ '@babel/plugin-proposal-class-properties' ]
					}
				}
			}
		]
	}
}