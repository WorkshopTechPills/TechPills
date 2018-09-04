const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        app: "./src/app.js"
    },
    plugins: [
        new CopyWebpackPlugin(
            [
                './assets'
            ]),
        new HtmlWebpackPlugin({
            template: './src/index_template.html'
        })
    ]
};