/*
 * @Description: style config
 * @Author: F-Stone
 * @Date: 2021-12-07 10:20:17
 * @LastEditTime: 2022-02-11 22:28:40
 * @LastEditors: F-Stone
 */

module.exports = {
    extends: "stylelint-config-sass-guidelines",
    plugins: [
        "stylelint-no-unsupported-browser-features",
        "stylelint-declaration-block-no-ignored-properties",
    ],
    ignoreFiles: ["!src/**/*.!(js|ts)"],
    rules: {
        "plugin/no-unsupported-browser-features": [
            true,
            { severity: "warning" },
        ],
        "plugin/declaration-block-no-ignored-properties": true,
        indentation: 4,
        "color-hex-case": "upper",
        "color-hex-length": "short",
        "color-no-invalid-hex": true,
        "color-function-notation": "modern",
        "max-nesting-depth": [4, {}],
        "selector-max-compound-selectors": [4, {}],
        "selector-class-pattern": "^[a-z][a-z0-9\\-_]*[a-z0-9]$",
        "scss/dollar-variable-pattern": "^[a-z][a-z0-9\\-_]*[a-z0-9]$",
        "at-rule-empty-line-before": "always",
        "rule-empty-line-before": "never",
        "selector-no-qualifying-type": [
            true,
            { ignore: ["attribute", "class", "id"] },
        ],
        "block-closing-brace-empty-line-before": [
            "never",
            { except: ["after-closing-brace"] },
        ],
        "no-duplicate-selectors": true,
        "declaration-block-no-duplicate-properties": [
            true,
            { ignore: ["consecutive-duplicates-with-different-values"] },
        ],
        "declaration-block-no-duplicate-custom-properties": true,
        "scss/selector-no-redundant-nesting-selector": null,
        "order/properties-order": [
            [
                {
                    groupName: "font",
                    emptyLineBefore: "always",
                    noEmptyLineBetween: true,
                    properties: [
                        "font",
                        "font-family",
                        "font-size",
                        "font-weight",
                        "font-style",
                        "font-variant",
                        "font-size-adjust",
                        "font-stretch",
                        "font-effect",
                        "font-emphasize",
                        "font-emphasize-position",
                        "font-emphasize-style",
                        "font-smooth",
                        "line-height",
                    ],
                },
                {
                    groupName: "position",
                    emptyLineBefore: "always",
                    noEmptyLineBetween: true,
                    properties: [
                        "position",
                        "z-index",
                        "top",
                        "right",
                        "bottom",
                        "left",
                    ],
                },
                {
                    groupName: "layout",
                    emptyLineBefore: "always",
                    noEmptyLineBetween: true,
                    properties: [
                        "display",
                        "visibility",
                        "float",
                        "clear",
                        "overflow",
                        "overflow-x",
                        "overflow-y",
                        "clip",
                        "zoom",
                        "flex-direction",
                        "flex-order",
                        "flex-pack",
                        "flex-align",
                        "flex",
                    ],
                },
                {
                    groupName: "size",
                    emptyLineBefore: "always",
                    noEmptyLineBetween: true,
                    properties: [
                        "box-sizing",
                        "width",
                        "min-width",
                        "max-width",
                        "height",
                        "min-height",
                        "max-height",
                        "margin",
                        "margin-top",
                        "margin-right",
                        "margin-bottom",
                        "margin-left",
                        "padding",
                        "padding-top",
                        "padding-right",
                        "padding-bottom",
                        "padding-left",
                    ],
                },
                {
                    groupName: "table",
                    emptyLineBefore: "always",
                    noEmptyLineBetween: true,
                    properties: [
                        "table-layout",
                        "empty-cells",
                        "caption-side",
                        "border-spacing",
                        "border-collapse",
                        "list-style",
                        "list-style-position",
                        "list-style-type",
                        "list-style-image",
                    ],
                },
                {
                    groupName: "animate",
                    emptyLineBefore: "always",
                    noEmptyLineBetween: true,
                    properties: [
                        "content",
                        "quotes",
                        "counter-reset",
                        "counter-increment",
                        "resize",
                        "cursor",
                        "user-select",
                        "nav-index",
                        "nav-up",
                        "nav-right",
                        "nav-down",
                        "nav-left",
                        "transition",
                        "transition-delay",
                        "transition-timing-function",
                        "transition-duration",
                        "transition-property",
                        "transform",
                        "transform-origin",
                        "animation",
                        "animation-name",
                        "animation-duration",
                        "animation-play-state",
                        "animation-timing-function",
                        "animation-delay",
                        "animation-iteration-count",
                        "animation-direction",
                        "text-align",
                        "text-align-last",
                        "vertical-align",
                        "white-space",
                        "text-decoration",
                        "text-emphasis",
                        "text-emphasis-color",
                        "text-emphasis-style",
                        "text-emphasis-position",
                        "text-indent",
                        "text-justify",
                        "letter-spacing",
                        "word-spacing",
                        "text-outline",
                        "text-transform",
                        "text-wrap",
                        "text-overflow",
                        "text-overflow-ellipsis",
                        "text-overflow-mode",
                        "word-wrap",
                        "word-break",
                        "tab-size",
                        "hyphens",
                        "pointer-events",
                    ],
                },
                {
                    groupName: "decorate",
                    emptyLineBefore: "always",
                    noEmptyLineBetween: true,
                    properties: [
                        "opacity",
                        "filter:progid:DXImageTransform.Microsoft.Alpha(Opacity",
                        "color",
                        "border",
                        "border-width",
                        "border-style",
                        "border-color",
                        "border-top",
                        "border-top-width",
                        "border-top-style",
                        "border-top-color",
                        "border-right",
                        "border-right-width",
                        "border-right-style",
                        "border-right-color",
                        "border-bottom",
                        "border-bottom-width",
                        "border-bottom-style",
                        "border-bottom-color",
                        "border-left",
                        "border-left-width",
                        "border-left-style",
                        "border-left-color",
                        "border-radius",
                        "border-top-left-radius",
                        "border-top-right-radius",
                        "border-bottom-right-radius",
                        "border-bottom-left-radius",
                        "border-image",
                        "border-image-source",
                        "border-image-slice",
                        "border-image-width",
                        "border-image-outset",
                        "border-image-repeat",
                        "outline",
                        "outline-width",
                        "outline-style",
                        "outline-color",
                        "outline-offset",
                        "background",
                        "filter:progid:DXImageTransform.Microsoft.AlphaImageLoader",
                        "background-color",
                        "background-image",
                        "background-repeat",
                        "background-attachment",
                        "background-position",
                        "background-position-x",
                        "background-position-y",
                        "background-clip",
                        "background-origin",
                        "background-size",
                        "box-decoration-break",
                        "box-shadow",
                        "filter:progid:DXImageTransform.Microsoft.gradient",
                        "text-shadow",
                    ],
                },
            ],
            {
                unspecified: "bottomAlphabetical",
                emptyLineBeforeUnspecified: "always",
            },
        ],
        "order/properties-alphabetical-order": null,
    },
};
