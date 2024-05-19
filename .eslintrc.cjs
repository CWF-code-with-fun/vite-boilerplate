/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable import/no-extraneous-dependencies */
const { resolve } = require("path");

// @ts-check
const { defineConfig } = require("eslint-define-config");

module.exports = defineConfig({
    env: { browser: true, es2020: true },
    extends: [
        "airbnb",
        "airbnb-typescript",
        "airbnb/hooks",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
        "plugin:react-hooks/recommended",
        "plugin:jsx-a11y/recommended",
        "plugin:promise/recommended",
        "plugin:import/recommended",
        "plugin:import/typescript",
        "plugin:tailwindcss/recommended",
        "prettier",
    ],
    overrides: [
        {
            files: ["*.test.{ts|tsx}", "*.cy.ts"],
            rules: {
                "import/no-extraneous-dependencies": "off",
            },
        },
        {
            files: ["*.cy.ts"],
            rules: {
                "@typescript-eslint/no-unused-expressions": "off",
                "@typescript-eslint/no-unused-vars": "off",
                "func-names": "off",
                "no-console": "off",
                "promise/always-return": "off",
                "promise/catch-or-return": "off",
                "promise/no-nesting": "off",
            },
        },
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaVersion: "latest",
        // project: true,
        sourceType: "module",
        project: resolve(__dirname, "./tsconfig.json"),
        createDefaultProgram: true,
    },
    plugins: [
        "react",
        "react-refresh",
        "@typescript-eslint",
        "jsx-a11y",
        "promise",
        "no-loops",
        "import",
        "prettier",
        "sort-keys-fix",
    ],
    rules: {
        "@typescript-eslint/consistent-type-imports": "warn",
        "@typescript-eslint/no-unused-vars": "error",
        "@typescript-eslint/prefer-as-const": "warn",
        "import/default": "error",
        "import/export": "error",
        "import/named": "error",
        "import/no-absolute-path": 0,
        "import/no-anonymous-default-export": "off",
        "import/no-duplicates": "error",
        "import/no-named-as-default": "error",
        "import/no-named-as-default-member": "off",
        "import/no-namespace": "off",
        "linebreak-style": 0,
        "no-loops/no-loops": 1,
        "prettier/prettier": ["error", {}, { properties: { usePrettierrc: true } }],
        quotes: ["error", "double"],
        "react-hooks/rules-of-hooks": "error",
        "react-refresh/only-export-components": 0,
        "react/react-in-jsx-scope": 0,
        "react/require-default-props": 0,
        semi: 1,
        "sort-keys-fix/sort-keys-fix": "error",
        "tailwindcss/no-custom-classname": 0,
        "react/jsx-uses-react": "off",
        indent: "off",
        eqeqeq: "error",
        "object-shorthand": "error",
        // overrides recommends
        "no-use-before-define": "off",
        "no-extra-boolean-cast": "off",
        "no-magic-numbers": "off",
        "no-undef": "off",
        "react/prop-types": "off",
        "react/display-name": "off",
        "@typescript-eslint/no-empty-interface": "off",
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/no-var-requires": "warn",
        "@typescript-eslint/ban-ts-comment": ["error", { "ts-ignore": "allow-with-description" }],
        // our additional rules
        "no-unneeded-ternary": "error",
        "react/jsx-boolean-value": "error",
        "react/jsx-closing-bracket-location": "error",
        "react/jsx-closing-tag-location": "error",
        "react/jsx-curly-spacing": "error",
        "react/jsx-no-bind": [
            "error",
            {
                ignoreRefs: true,
                allowArrowFunctions: true,
                allowBind: false,
            },
        ],
        "react/jsx-pascal-case": "error",
        "react/jsx-tag-spacing": "error",
        "react/jsx-wrap-multilines": "error",
        "react/jsx-handler-names": [
            "error",
            {
                eventHandlerPrefix: "handle",
            },
        ],
        "react/no-array-index-key": "off",
        "react/self-closing-comp": "error",
        "react/sort-comp": [
            "error",
            {
                order: [
                    "static-methods",
                    "instance-variables",
                    "lifecycle",
                    "render",
                    "/^render.+$/",
                    "/^on.+$/",
                    "everything-else",
                ],
            },
        ],
        "react/jsx-no-target-blank": "error",
        "react/boolean-prop-naming": [
            "error",
            {
                propTypeNames: ["bool", "boolean"],
                validateNested: true,
            },
        ],
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/explicit-member-accessibility": "off",
        "@typescript-eslint/indent": "off",
        "@typescript-eslint/prefer-includes": "error",
        "@typescript-eslint/array-type": "error",
        "@typescript-eslint/naming-convention": [
            "error",
            {
                selector: "variable",
                format: ["UPPER_CASE"],
                modifiers: ["global", "const"],
                types: ["number"],
            },
            {
                selector: "variable",
                format: ["PascalCase"],
                modifiers: ["const"],
                types: ["boolean"],
                prefix: ["is", "has", "can"],
            },
            {
                selector: ["typeAlias", "interface"],
                format: ["PascalCase"],
                custom: {
                    match: false,
                    regex: "([A-Z][a-z]+)+Type$",
                },
            },
        ],
        // "eslint-comments/no-unlimited-disable": "error",
        "import/order": [
            "error",
            {
                groups: ["builtin", "external", "internal", "parent", "sibling", "index"],
                "newlines-between": "always",
                alphabetize: {
                    order: "asc",
                    caseInsensitive: true,
                },
            },
        ],
    },
    settings: {
        "import/parsers": {
            "@typescript-eslint/parser": [".ts", ".tsx"],
        },
        "import/resolver": {
            node: {
                extensions: [".ts", ".tsx"],
            },
            typescript: {
                alwaysTryTypes: true,
                project: ["./tsconfig.json"],
            },
        },
        react: {
            version: "detect",
        },
        tailwindcss: {
            callees: ["classnames", "clsx", "ctl"],
            classRegex: "^class(Name)?$",
            config: "tailwind.config.js",
            cssFiles: ["**/*.css", "**/*.scss", "!**/node_modules", "!**/.*", "!**/dist", "!**/build"],
            cssFilesRefreshRate: 5_000,
            removeDuplicates: true,
            skipClassAttribute: false,
            tags: [],
            whitelist: [], // can be modified to support custom attributes. E.g. "^tw$" for `twin.macro`
        },
    },
});
