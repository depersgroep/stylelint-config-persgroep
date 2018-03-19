module.exports = {
    "extends": "stylelint-config-property-sort-order-smacss",
    "plugins": [
        "stylelint-declaration-strict-value",
        "stylelint-order",
        "stylelint-scss"
    ],
    "rules": {
        "rule-empty-line-before": [
            "always",
            {
                "except": [
                    "after-single-line-comment",
                    "first-nested"
                ]
            }
        ],
        "block-no-empty": true,
        "declaration-no-important": true,
        "indentation": "tab",
        "max-nesting-depth": [
            3,
            {
                "ignore": "blockless-at-rules"
            }
        ],
        "order/order": [
            {
                "type": "at-rule",
                "hasBlock": false
            },
            "custom-properties",
            "dollar-variables",
            "declarations",
            {
                "type": "at-rule",
                "hasBlock": true
            },
            "rules"
        ],
        "selector-no-qualifying-type": [
            true,
            {
                "ignore": "attribute"
            }
        ],
        "selector-max-specificity": [
            "0,4,0"
        ],
        "selector-class-pattern": [
            "^(?:(?:o|c|u|t|s|is|has|_|js|fjs|qa)-)?[a-zA-Z0-9]+(?:-[a-zA-Z0-9]+)*(?:__[a-zA-Z0-9]+(?:-[a-zA-Z0-9]+)*)?(?:--[a-zA-Z0-9]+(?:-[a-zA-Z0-9]+)*)?(?:\\[.+\\])?$"
        ],
        "declaration-block-semicolon-newline-after": "always",
        "function-calc-no-unspaced-operator": true,
        "media-feature-range-operator-space-after": "always",
        "media-feature-range-operator-space-before": "always",
        "selector-attribute-operator-space-after": "never",
        "value-keyword-case": "lower",
        "number-leading-zero": "never",
        "scss/operator-no-unspaced": true,
        "scale-unlimited/declaration-strict-value": [
            "color",
            {
                "ignoreKeywords": "inherit"
            }
        ]
    }
}