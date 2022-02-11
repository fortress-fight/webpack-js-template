/*
 * @Description:
 * @Author: F-Stone
 * @Date: 2022-02-11 21:02:41
 * @LastEditTime: 2022-02-11 22:29:06
 * @LastEditors: F-Stone
 */

const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const ESLintWebpackPlugin = require("eslint-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require("webpack");
const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const FriendlyErrorsWebpackPlugin = require("friendly-errors-webpack-plugin");

/* ---------------------------------- */
/*     html-webpack-plugin@^5.5.0     */
/* ---------------------------------- */
const HtmlWebpackPlugin = require("html-webpack-plugin");
const fs = require("fs");

const { testFileIsExit } = require("../../utils/test-file-exit");
const { createFile } = require("../../utils/create-file");
const { PAGES_CONFIG, TEMPLATE_EXT } = require("../config/webpack.page");

const WebpackBuildNotifierPlugin = require("webpack-build-notifier");
const {
    IS_DEV_MODE,
    USE_THREAD_LOADER,
    PROJECT_NAME,
    HASH_NAME,
    ANALYZER,
} = require("../config/webpack.env");
const {
    ROOT_PATH,
    OUT_FILE_PATH,
    OUT_PATH,
    ENTRY_FILE_PATH,
    PUBLIC_PATH,
    OUT_DLL_PATH,
} = require("../config/webpack.path");
const { OUT_STYLE_PATH, OUT_JS_PATH } = OUT_FILE_PATH;

const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const AddAssetHtmlPlugin = require("add-asset-html-webpack-plugin");

exports.getDefinePlugin = function () {
    return new webpack.DefinePlugin({
        "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
        "process.env.IS_DEV_MODE": JSON.stringify(IS_DEV_MODE),
    });
};

exports.getESLintPlugin = function () {
    return new ESLintWebpackPlugin({
        context: ROOT_PATH,
        extensions: [".js", ".jsx", ".ts", ".tsx"],
        emitWarning: false,
        lintDirtyModulesOnly: true,
        threads: USE_THREAD_LOADER,
    });
};

exports.getNoticePlugin = function () {
    return new WebpackBuildNotifierPlugin({
        title: PROJECT_NAME,
        showDuration: true,
    });
};

exports.getCleanDistPlugin = function () {
    return new CleanWebpackPlugin();
};

exports.getCssExtractPlugin = function () {
    const HASH_NAME_RULE = HASH_NAME ? "[name]_[contenthash:8]" : "[name]";
    return new MiniCssExtractPlugin({
        filename: path.posix.join(OUT_STYLE_PATH, `${HASH_NAME_RULE}.css`),
        chunkFilename: path.posix.join(OUT_STYLE_PATH, `${HASH_NAME_RULE}.css`),
    });
};

exports.getCopyPlugin = function () {
    return new CopyPlugin({
        patterns: [
            {
                from: path.resolve(ROOT_PATH, "public"),
                to: OUT_PATH,
                toType: "dir",
                globOptions: {
                    ignore: [".DS_Store", "**/.gitkeep"],
                },
                noErrorOnMissing: true,
            },
        ],
    });
};

exports.getBundleAnalyzerPlugin = function () {
    return new WebpackBuildNotifierPlugin({
        analyzerMode: ANALYZER || "disabled",
        generateStatsFile: ANALYZER,
    });
};

exports.getHtmlWebpackPluginArr = function () {
    const { TEMPLATE_PATH } = ENTRY_FILE_PATH;

    async function testTemplateIsExit(filename) {
        try {
            await testFileIsExit(filename);
        } catch (error) {
            await createFile(filename, "")
                .then()
                .catch((err) => {
                    console.log("err:", err);
                });
        }
    }

    return PAGES_CONFIG.map(({ name, param, config }) => {
        const templateFilename = path.resolve(
            TEMPLATE_PATH,
            name + TEMPLATE_EXT
        );

        testTemplateIsExit(templateFilename);

        const DEFAULT_CONFIG = Object.assign(
            {
                title: PROJECT_NAME,
                minify: IS_DEV_MODE
                    ? false
                    : {
                          collapseWhitespace: false,
                          keepClosingSlash: true,
                          removeComments: true,
                          removeRedundantAttributes: true,
                          removeScriptTypeAttributes: true,
                          removeStyleLinkTypeAttributes: true,
                          useShortDoctype: true,
                          preserveLineBreaks: true,
                      },
                templateParameters: {
                    publicPath: PUBLIC_PATH,
                    PROJECT_NAME,
                    IMG_PATH: OUT_FILE_PATH.OUT_IMG_PATH,
                    ...param,
                },
                template: templateFilename,
                chunks: "all",
                excludeChunks: [],
                filename: name + ".html",
                beautify: {
                    "indent-size": 4,
                },
            },
            config
        );
        return new HtmlWebpackPlugin(DEFAULT_CONFIG);
    });
};

exports.getFriendlyErrorPlugin = function () {
    return new FriendlyErrorsWebpackPlugin();
};

exports.getTsCheckerPlugin = function () {
    return new ForkTsCheckerWebpackPlugin();
};

exports.getInsertDllPluginArr = function () {
    let DLL_PLUGINS = [];

    try {
        fs.accessSync(OUT_DLL_PATH);
        const Dll_JSON = fs
            .readdirSync(OUT_DLL_PATH)
            .filter((e) => e.match(/.*\.json$/gi))
            .map((f) => {
                return new webpack.DllReferencePlugin({
                    manifest: require(path.resolve(OUT_DLL_PATH, f)),
                });
            });

        DLL_PLUGINS = [
            ...Dll_JSON,
            new AddAssetHtmlPlugin([
                {
                    filepath: path.resolve(OUT_DLL_PATH, OUT_JS_PATH, "*.js"),
                    publicPath: path.posix.join(PUBLIC_PATH, OUT_JS_PATH),
                    outputPath: OUT_JS_PATH,
                },
                {
                    filepath: path.resolve(
                        OUT_DLL_PATH,
                        OUT_STYLE_PATH,
                        "*.css"
                    ),
                    publicPath: path.posix.join(PUBLIC_PATH, OUT_STYLE_PATH),
                    outputPath: OUT_STYLE_PATH,
                },
            ]),
        ];
    } catch (error) {
        //
    }

    return DLL_PLUGINS;
};
