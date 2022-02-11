/*
 * @Description: webpack 开发配置文件
 * @Author: F-Stone
 * @Date: 2021-11-30 18:39:28
 * @LastEditTime: 2022-02-11 22:27:35
 * @LastEditors: F-Stone
 */
const { merge } = require("webpack-merge");
const { WEBPACK_DEV_SERVER } = require("./config/webpack.devserver");
const { WEBPACK_DEV_PLUGIN } = require("./plugins/webpack-dev-plugin");
const { WEBPACK_DEV_RULES } = require("./rules/webpack-rule-entry");
const PUB_CONFIG = require("./webpack.pub.config");

module.exports = () => {
    return merge(PUB_CONFIG, {
        output: { pathinfo: false },
        stats: { preset: "none", colors: true },
        mode: "development",
        devtool: "eval-cheap-module-source-map",
        devServer: WEBPACK_DEV_SERVER,
        plugins: WEBPACK_DEV_PLUGIN,
        module: { rules: WEBPACK_DEV_RULES },
        optimization: {
            removeAvailableModules: false,
            removeEmptyChunks: false,
            splitChunks: false,
        },
    });
};
