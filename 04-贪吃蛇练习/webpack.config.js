const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/index.ts",
    mode: "development",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
        clean: true
    },
    module: {
        rules: [
            {
                // 指定的是规则生效的文件
                test: /\.ts$/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets:
                            [['@babel/preset-env',
                                {
                                    // 要兼容的版本
                                    targets: {
                                        "chrome": "58",
                                        "ie": "11"
                                    },
                                    // corejs版本
                                    "corejs": "3",
                                    // 使用corejs的方式
                                    "useBuiltIns": "usage" /*按需加载*/
                                }
                            ]]
                    },
                }, 'ts-loader'], /*先使用后面的加载器，然后用前面的*/
                exclude: /node_modules/
            },
            {
                test: /\.less$/,
                use: [
                    "style-loader",
                    "css-loader",
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                plugins: [
                                    [
                                        "postcss-preset-env",
                                        {
                                            browsers: "last 2 versions"
                                        }
                                    ]
                                ]
                            }
                        }
                    },
                    "less-loader"]
            }
        ]
    },
    // 配置webpack插件
    plugins: [
        new HTMLWebpackPlugin({
            // title: "Webpack Plugin自定义的title"
            template: "./src/index.html"
        })
    ],
    // 设置引用模块。
    resolve: {
        extensions: ['.ts', '.js']
    }
}