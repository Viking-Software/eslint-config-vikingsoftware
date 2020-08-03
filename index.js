module.exports = {
    env: {
        "es2020": true,
        "mocha": true,
        "node": true
    },

    extends: [
        "eslint:recommended",
        "plugin:jsdoc/recommended"
    ],

    parser: "babel-eslint",

    parserOptions: {
        "ecmaVersion": 11,
        "ecmaFeatures": {
            "impliedStrict": true
        },
        "sourceType": "module"
    },

    plugins: [
        "jsdoc"
    ],

    rules: {
        // Possible Errors
        "no-await-in-loop": "warn",
        "no-control-regex": "off",
        "no-promise-executor-return": "error",
        "no-template-curly-in-string": "error",
        "no-unreachable-loop": "error",
        "no-useless-backreference": "error",
        "require-atomic-updates": "error",

        // Best Practices
        "block-scoped-var": "error",
        "curly": "error",
        "default-case-last": "error",
        "dot-location": ["error", "property"],
        "dot-notation": "error",
        "eqeqeq": ["error", "smart"],
        "no-constructor-return": "error",
        "no-else-return": "error",
        "no-empty-function": "error",
        "no-floating-decimal": "error",
        "no-implicit-coercion": "error",
        "no-implicit-globals": "error",
        "no-invalid-this": "error",
        "no-lone-blocks": "error",
        "no-magic-numbers": ["warn", { "ignore": [0] }],
        "no-multi-spaces": ["warn", { "ignoreEOLComments": true }],
        "no-return-assign": ["warn", "always"],
        "no-return-await": "warn",
        "no-self-assign": "error",
        "no-self-compare": "error",
        "no-throw-literal": "error",
        "no-useless-escape": "off",
        "no-useless-return": "error",
        "prefer-promise-reject-errors": "error",
        "yoda": "error",

        // Strict Mode overridden by both:
        // parserOptions.sourceType
        // parserOptions.ecmaFeatures.impliedStrict

        // Variables
        "no-shadow": "warn",
        "no-unused-vars": "warn",

        // Sylistic Issues
        "array-bracket-newline": ["error", { "multiline": true }],
        "array-bracket-spacing": ["error", "always"],
        "array-element-newline": ["error", "consistent"],
        "block-spacing": ["error", "always"],
        "brace-style": ["error", "1tbs"],
        "camelcase": "error",
        "comma-dangle": ["error", "never"],
        "comma-spacing": ["error", { "before": false, "after": true }],
        "comma-style": ["error", "last"],
        "computed-property-spacing": ["error", "never"],
        "eol-last": ["error", "never"],
        "func-call-spacing": ["error", "never"],
        "function-call-argument-newline": ["error", "consistent"],
        "function-paren-newline": ["error", "consistent"],
        "id-denylist": ["error", "e", "err", "req", "res"],
        "implicit-arrow-linebreak": ["error", "beside"],
        "indent": ["error", 4, {
            "SwitchCase": 1,
            "MemberExpression": 1,
            "FunctionDeclaration": { "parameters": "first" },
            "FunctionExpression": { "parameters": "first" },
            "CallExpression": { "arguments": "first" },
            "ArrayExpression": 1,
            "ObjectExpression": 1,
            "flatTernaryExpressions": false,
            "offsetTernaryExpressions": true
        }],
        "key-spacing": ["error", { "beforeColon": false, "afterColon": true }],
        "keyword-spacing": ["error", {
            "overrides": {
                "if": { "after": false },
                "for": { "after": false },
                "while": { "after": false }
            }
        }],
        "linebreak-style": ["error", "unix"],
        "lines-between-class-members": ["error", "always"],
        "new-cap": ["error", { "newIsCap": true }],
        "new-parens": "error",
        "no-lonely-if": "error",
        "no-multi-assign": "error",
        "no-multiple-empty-lines": "error",
        "no-nested-ternary": "warn",
        "no-tabs": "error",
        "no-trailing-spaces": "warn",
        "no-underscore-dangle": "error",
        "no-unneeded-ternary": "error",
        "no-whitespace-before-property": "warn",
        "object-curly-newline": ["error", { "consistent": true }],
        "object-curly-spacing": ["error", "always"],
        "one-var": ["error", "never"],
        "operator-assignment": ["error", "always"],
        "padded-blocks": ["error", { "classes": "always" }],
        //"prefer-exponentiation-operator": "error", // Requires ES2016
        //"prefer-object-spread": "error", // Requires ES2018
        "quote-props": ["error", "as-needed"],
        "quotes": ["error", "backtick"], // Need to revisit this
        "require-jsdoc": ["error", {
            "require": {
                "FunctionDeclaration": true,
                "MethodDefinition": true,
                "ClassDeclaration": true,
                "ArrowFunctionExpression": false,
                "FunctionExpression": false
            }
        }],
        "semi": ["error", "always"],
        "semi-spacing": ["error", { "before": false, "after": true }],
        "semi-style": ["error", "last"],
        "space-before-blocks": "error",
        "space-before-function-paren": ["error", "never"],
        "space-in-parens": ["error", "never"],
        "space-infix-ops": "error",
        "space-unary-ops": ["error", { "words": true, "nonwords": false }],
        "spaced-comment": ["error", "always"],
        "switch-colon-spacing": ["error", { "before": false, "after": true }],
        "template-tag-spacing": ["error", "never"],

        // ECMAScript 6
        "arrow-body-style": ["error", "as-needed"],
        "arrow-parens": ["error", "as-needed"],
        "arrow-spacing": ["error", { "before": true, "after": true }],
        "generator-star-spacing": ["error", { "before": false, "after": true }],
        "no-useless-rename": "warn",
        "no-var": "error",
        "object-shorthand": ["error", "never"],
        "prefer-arrow-callback": "error",
        "prefer-const": "error",
        "prefer-destructuring": "warn",
        "prefer-spread": "error",
        "prefer-template": "error",
        "rest-spread-spacing": ["error", "never"],
        "symbol-description": "error",
        "template-curly-spacing": ["error", "never"], // Need to revisit this
        "yield-star-spacing": ["error", "after"]
    }
};