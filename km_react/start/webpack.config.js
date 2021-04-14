module.exprots = {
    //어디서 시작하는가?
    entry: [  
        "./src/index.js"
    ],
    //압축한거 어디에 출력할 것인가.
    output: {
        path: __dirname + "/dist",
        publicPath: "/",
        filename: "bundle.js"
    },
    //모듈이란? 우리가 사용할 파일리스트.
    module: {
        // 우리가 babel을 통해서 js , jsx 파일을 사용한다. 룰을 추가 가능함(따로 조사)
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use:{
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"]
                    }
                }
            }
        ]
    },
    //확장자
    resolve:{
        extensions: [".js", ".jsx"]
    },
    //webpack이 제공하는 디벨로퍼 서버
    devServer:{
        contentBase: "./dist",
        port: 3000,
        historyApiFallback: true
    }
}