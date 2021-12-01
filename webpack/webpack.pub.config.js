/*
 * @Description: webpack 开发与生产公用配置文件
 * @Author: F-Stone
 * @Date: 2021-11-30 18:40:01
 * @LastEditTime: 2021-12-01 15:12:52
 * @LastEditors: F-Stone
 */
const path = require("path");
const { HASH_NAME_RULE } = require("./config/webpack.env");
const {
    SRC_PATH,
    OUT_PATH,
    OUT_FILE_PATH,
    PUBLIC_PATH,
} = require("./config/webpack.path");
const { WEBPACK_PUB_PLUGINS } = require("./plugins/webpack-plugin-entry");

const { OUT_JS_PATH } = OUT_FILE_PATH;

module.exports = {
    entry: path.resolve(SRC_PATH, "app.js"),
    output: {
        path: OUT_PATH,
        publicPath: PUBLIC_PATH,
        filename: path.posix.join(OUT_JS_PATH, `${HASH_NAME_RULE}.js`),
        chunkFilename: path.posix.join(OUT_JS_PATH, `${HASH_NAME_RULE}.js`),
    },
    plugins: WEBPACK_PUB_PLUGINS,
};