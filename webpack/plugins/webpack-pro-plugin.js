/*
 * @Description:
 * @Author: F-Stone
 * @Date: 2022-02-11 21:02:16
 * @LastEditTime: 2022-02-11 22:28:21
 * @LastEditors: F-Stone
 */

const {
    getHtmlWebpackPluginArr,
    getFriendlyErrorPlugin,
    getDefinePlugin,
    getNoticePlugin,
    getESLintPlugin,
    getCssExtractPlugin,
    getCleanDistPlugin,
    getCopyPlugin,
    getBundleAnalyzerPlugin,
    getInsertDllPluginArr,
} = require("./webpack-pub-plugin");

exports.WEBPACK_PRO_PLUGIN = [
    getCleanDistPlugin(),
    getCopyPlugin(),
    getCssExtractPlugin(),
    ...getHtmlWebpackPluginArr(),
    ...getInsertDllPluginArr(),
    getFriendlyErrorPlugin(),
    getDefinePlugin(),
    getNoticePlugin(),
    getESLintPlugin(),
    getBundleAnalyzerPlugin(),
];
