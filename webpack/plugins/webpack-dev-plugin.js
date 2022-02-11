/*
 * @Description:
 * @Author: F-Stone
 * @Date: 2022-02-11 21:02:00
 * @LastEditTime: 2022-02-11 22:28:03
 * @LastEditors: F-Stone
 */
const {
    getHtmlWebpackPluginArr,
    getFriendlyErrorPlugin,
    getDefinePlugin,
    getNoticePlugin,
    getESLintPlugin,
    getTsCheckerPlugin,
    getInsertDllPluginArr,
} = require("./webpack-pub-plugin");

exports.WEBPACK_DEV_PLUGIN = [
    getTsCheckerPlugin(),
    ...getHtmlWebpackPluginArr(),
    ...getInsertDllPluginArr(),
    getFriendlyErrorPlugin(),
    getDefinePlugin(),
    getNoticePlugin(),
    getESLintPlugin(),
];
