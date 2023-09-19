const path = require("path");
const webpack = require("webpack");

const entryPath = "projekt";

module.exports = {
    mode: "none",
    entry: ["whatwg-fetch", `./${entryPath}/js/App.js`],
    devtool: "inline-source-map",
    output: {
        filename: "out.js",
        path: path.resolve(__dirname, `${entryPath}/build`),
        clean: true,
    },
    devServer: {
        open: true,
        hot: true,
        static: [
            {
                directory: path.join(__dirname, entryPath),
                publicPath: "/",
                serveIndex: true,
            },
        ],
        devMiddleware: {
            writeToDisk: true,
        },
        compress: true,
        port: 3001,
        historyApiFallback: true,
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
        ],
    },
    plugins: [
        new webpack.ProvidePlugin({
            process: "process/browser",
        }),
    ],
};
