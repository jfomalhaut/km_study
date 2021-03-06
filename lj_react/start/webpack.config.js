module.exports = {
	// 어디서 시작하는가?
	entry: [ 
		"./src/index.js"
	],
	// 압축한거 어디다가 출력할 것인가?
	output: {
		path: __dirname + "/dist",
		publicPath: "/",
		filename: "bundle.js"
	},
	// 모듈이란, 우리가 사용할 파일 리스트.
	module: {
		rules: [
			// 우리가 babel을 통해서 js or jsx파일을 사용한다
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ["@babel/preset-env"]
					}
				}
			}
		]
	},
	// 확장자
	resolve: {
		extensions: [".js", ".jsx"]
	},
	// webpack이 제공하는 develope용 서버
	devServer: {
		contentBase: "./dist",
		port: 3000,
		historyApiFallback: true
	}
}