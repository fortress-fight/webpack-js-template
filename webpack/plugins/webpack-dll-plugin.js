/*
 * @Description: 
 * @Author: F-Stone
 * @Date: 2022-02-11 22:16:48
 * @LastEditTime: 2022-02-11 22:20:14
 * @LastEditors: F-Stone
 */

const webpack = require("webpack");
const path = require("path");

const { DLL_NAME_RULE } = require("../config/webpack.env");
const { getNoticePlugin, getFriendlyErrorPlugin, getCleanDistPlugin, getCssExtractPlugin } = require("./webpack-pub-plugin");
const { OUT_DLL_PATH } = require("../config/webpack.path");

exports.WEBPACK_DLL_PLUGIN = [
    getNoticePlugin(),
    getFriendlyErrorPlugin(),
    getCleanDistPlugin(),
    getCssExtractPlugin(),
    new webpack.ProgressPlugin(),
    new webpack.DllPlugin({
        name: DLL_NAME_RULE,
        path: path.resolve(OUT_DLL_PATH, "[name]_manifest.json")
    })
]
