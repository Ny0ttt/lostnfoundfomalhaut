import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";


/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ["**/*.{js,mjs,cjs,jsx}"], 
    languageOptions: { globals: globals.browser,
       ecmaVersion: 2021, sourceType: "module" }, 
       plugins: { js: pluginJs, react: pluginReact }, 
       rules: { "semi": ["error", "always"],
         "quotes": ["error", "single"], 
         "no-unused-vars": ["warn"], 
         "react/prop-types": "off",
          "eqeqeq": ["error", "always"],
           "no-multi-spaces": "error", 
           "consistent-return": "error",
            "array-callback-return": "error", 
            "jsx-quotes": ["error", "prefer-double"], 
            "react/jsx-uses-react": "error",
             "react/jsx-uses-vars": "error", 
             "no-var": "error", 
             "prefer-const": "error",
              "no-empty": "error", 
              "curly": ["error", "all"], 
              "no-undef": "error",
               "comma-dangle": ["error", "never"],
                "camelcase": ["error", { "properties": "always" }] } },
                 pluginJs.configs.recommended, 
                 pluginReact.configs.flat.recommended
];