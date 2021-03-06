/*
 * @Description: eslint setting
 * @Author: F-Stone
 * @Date: 2021-12-06 23:59:59
 * @LastEditTime: 2022-02-11 22:10:27
 * @LastEditors: F-Stone
 */

module.exports = {
    root: true,
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: "module",
        parser: "@typescript-eslint/parser",
    },
    env: {
        es6: true,
        browser: true,
        node: true,
    },
    extends: ["eslint:recommended", "plugin:prettier/recommended"],
    rules: {
        "prefer-const": "error",
        "prettier/prettier": ["error", { endOfLine: "auto" }],
        "no-console": "off",
        "no-debugger": "off",
    },
    overrides: [
        {
            files: ["**/*.ts"],
            extends: [
                "eslint:recommended",
                "plugin:@typescript-eslint/recommended",
                "plugin:prettier/recommended",
            ],
            rules: {
                "no-debugger": "off",
            },
        },
        {
            files: ["**/*.d.ts"],
            rules: {
                "@typescript-eslint/no-explicit-any": 0,
            },
        },
    ],
    globals: {},
};
