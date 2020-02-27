{
  "parser": "babel-eslint",
  "root": true,
  "env": {
    "browser": true,
    "react-native/react-native": true
  },
  "plugins": ["react", "react-native", "flowtype", "prettier", "react-hooks"],
  "extends": [
    "@react-native-community",
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
    "prettier/react",
    "prettier/standard"
  ],
  "rules": {
    "prefer-const": [
      "error",
      {
        "destructuring": "all",
        "ignoreReadBeforeAssign": false
      }
    ],
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "max-len": ["error", 80],
    "react-native/no-unused-styles": 2,
    "react-native/no-inline-styles": 0,
    "react-native/no-color-literals": 2,
    "react-native/no-raw-text": 2,
    "flowtype/define-flow-type": 1,
    "flowtype/use-flow-type": 1,
    "prettier/prettier": [
      "error",
      {
        "singleQuote": false,
        "semi": false,
        "printWidth": 80,
        "tabWidth": 2
      }
    ],
    "no-else-return": 2, // disallow else after a return in an if (off by default)
    "semi": "off",
    // General
    "no-cond-assign": 1, // disallow assignment in conditional expressions
    "no-console": 0, // disallow use of console (off by default in the node environment)
    "no-const-assign": 2, // disallow assignment to const-declared variables
    "no-constant-condition": 0, // disallow use of constant expressions in conditions
    "no-control-regex": 1, // disallow control characters in regular expressions
    "no-debugger": 1, // disallow use of debugger
    "no-dupe-class-members": 2, // Disallow duplicate name in class members
    "no-dupe-keys": 2, // disallow duplicate keys when creating object literals
    "no-empty": 0, // disallow empty statements
    "no-ex-assign": 1, // disallow assigning to the exception in a catch block
    "no-extra-boolean-cast": 1, // disallow double-negation boolean casts in a boolean context
    "no-extra-parens": 0, // disallow unnecessary parentheses (off by default)
    "no-extra-semi": 1, // disallow unnecessary semicolons
    "no-func-assign": 1, // disallow overwriting functions written as function declarations
    "no-inner-declarations": 0, // disallow function or variable declarations in nested blocks
    "no-invalid-regexp": 1, // disallow invalid regular expression strings in the RegExp constructor
    "no-negated-in-lhs": 1, // disallow negation of the left operand of an in expression
    "no-obj-calls": 1, // disallow the use of object properties of the global object (Math and JSON) as functions
    "no-regex-spaces": 1, // disallow multiple spaces in a regular expression literal
    "no-reserved-keys": 0, // disallow reserved words being used as object literal keys (off by default)
    "no-sparse-arrays": 1, // disallow sparse arrays
    "no-unreachable": 2, // disallow unreachable statements after a return, throw, continue, or break statement
    "use-isnan": 1, // disallow comparisons with the value NaN
    "valid-jsdoc": 0, // Ensure JSDoc comments are valid (off by default)
    "valid-typeof": 1, // Ensure that the results of typeof are compared against a valid string

    // Best Practices
    // These are rules designed to prevent you from making mistakes. They either prescribe a better way of doing something or help you avoid footguns.

    "block-scoped-var": 0, // treat var statements as if they were block scoped (off by default)
    "complexity": 0, // specify the maximum cyclomatic complexity allowed in a program (off by default)
    "consistent-return": 0, // require return statements to either always or never specify values
    "curly": 1, // specify curly brace conventions for all control statements
    "default-case": 0, // require default case in switch statements (off by default)
    "dot-notation": 1, // encourages use of dot notation whenever possible
    "eqeqeq": [1, "allow-null"], // require the use of === and !==
    "guard-for-in": 0, // make sure for-in loops have an if statement (off by default)
    "no-alert": 1, // disallow the use of alert, confirm, and prompt
    "no-caller": 1, // disallow use of arguments.caller or arguments.callee
    "no-div-regex": 1, // disallow division operators explicitly at beginning of regular expression (off by default)
    "no-eq-null": 0, // disallow comparisons to null without a type-checking operator (off by default)
    "no-eval": 2, // disallow use of eval()
    "no-extend-native": 1, // disallow adding to native types
    "no-extra-bind": 1, // disallow unnecessary function binding
    "no-fallthrough": 1, // disallow fallthrough of case statements
    "no-floating-decimal": 1, // disallow the use of leading or trailing decimal points in numeric literals (off by default)
    "no-implied-eval": 1, // disallow use of eval()-like methods
    "no-labels": 1, // disallow use of labeled statements
    "no-iterator": 1, // disallow usage of __iterator__ property
    "no-lone-blocks": 1, // disallow unnecessary nested blocks
    "no-loop-func": 0, // disallow creation of functions within loops
    "no-multi-str": 0, // disallow use of multiline strings
    "no-native-reassign": 0, // disallow reassignments of native objects
    "no-new": 1, // disallow use of new operator when not part of the assignment or comparison
    "no-new-func": 2, // disallow use of new operator for Function object
    "no-new-wrappers": 1, // disallows creating new instances of String,Number, and Boolean
    "no-octal": 1, // disallow use of octal literals
    "no-octal-escape": 1, // disallow use of octal escape sequences in string literals, such as var foo = "Copyright \251";
    "no-proto": 1, // disallow usage of __proto__ property
    "no-redeclare": 0, // disallow declaring the same variable more then once
    "no-return-assign": 1, // disallow use of assignment in return statement
    "no-script-url": 1, // disallow use of javascript: urls.
    "no-self-compare": 1, // disallow comparisons where both sides are exactly the same (off by default)
    "no-sequences": 1, // disallow use of comma operator
    "no-unused-expressions": 0, // disallow usage of expressions in statement position
    "no-void": 1, // disallow use of void operator (off by default)
    "no-warning-comments": 0, // disallow usage of configurable warning terms in comments": 1,                        // e.g. TODO or FIXME (off by default)
    "no-with": 1, // disallow use of the with statement
    "radix": 1, // require use of the second argument for parseInt() (off by default)
    "semi-spacing": 1, // require a space after a semi-colon
    "vars-on-top": 0, // requires to declare all vars on top of their containing scope (off by default)
    "wrap-iife": 0, // require immediate function invocation to be wrapped in parentheses (off by default)
    "yoda": 1, // require or disallow Yoda conditions

    // Variables
    // These rules have to do with variable declarations.

    "no-catch-shadow": 1, // disallow the catch clause parameter name being the same as a variable in the outer scope (off by default in the node environment)
    "no-delete-var": 1, // disallow deletion of variables
    "no-label-var": 1, // disallow labels that share a name with a variable
    "no-shadow": 1, // disallow declaration of variables already declared in the outer scope
    "no-shadow-restricted-names": 1, // disallow shadowing of names such as arguments
    "no-undef": 2, // disallow use of undeclared variables unless mentioned in a /*global */ block
    "no-undefined": 0, // disallow use of undefined variable (off by default)
    "no-undef-init": 1, // disallow use of undefined when initializing variables
    "no-unused-vars": [
      1,
      { "vars": "all", "args": "none", "ignoreRestSiblings": true }
    ], // disallow declaration of variables that are not used in the code
    "no-use-before-define": 0, // disallow use of variables before they are defined

    "camelcase": 0, // require camel case names
    "no-trailing-spaces": 1, // disallow trailing whitespace at the end of lines
    "no-mixed-spaces-and-tabs": 1, // disallow mixed spaces and tabs for indentation
    // React Plugin
    // The following rules are made available via `eslint-plugin-react`.

    "react/display-name": 0,
    "react/jsx-boolean-value": 0,
    "react/jsx-no-comment-textnodes": 1,
    "react/jsx-no-duplicate-props": 2,
    "react/jsx-no-undef": 2,
    "react/jsx-sort-props": 0,
    "react/jsx-uses-react": 1,
    "react/jsx-uses-vars": 1,
    "react/no-did-mount-set-state": 1,
    "react/no-did-update-set-state": 1,
    "react/no-multi-comp": 0,
    "react/no-string-refs": 1,
    "react/no-unknown-property": 0,
    "react/prop-types": 0,
    "react/react-in-jsx-scope": 1,
    "react/self-closing-comp": 1,
    "react/wrap-multilines": 0
  },
  "ecmaFeatures": {
    "jsx": true
  },

  // Map from global var to bool specifying if it can be redefined
  "globals": {
    "__DEV__": true,
    "__dirname": false,
    "__fbBatchedBridgeConfig": false,
    "alert": false,
    "cancelAnimationFrame": false,
    "cancelIdleCallback": false,
    "clearImmediate": true,
    "clearInterval": false,
    "clearTimeout": false,
    "console": false,
    "document": false,
    "escape": false,
    "Event": false,
    "EventTarget": false,
    "exports": false,
    "fetch": false,
    "FormData": false,
    "global": false,
    "Map": true,
    "module": false,
    "navigator": false,
    "process": false,
    "Promise": true,
    "requestAnimationFrame": true,
    "requestIdleCallback": true,
    "require": false,
    "Set": true,
    "setImmediate": true,
    "setInterval": false,
    "setTimeout": false,
    "window": false,
    "XMLHttpRequest": false,
    "jest": true
  },
  "overrides": [
    {
      "files": ["local-cli/**/*.js"],
      "rules": {
        "lint/extra-arrow-initializer": 0,
        "no-alert": 0,
        "no-console-disallow": 0
      },
      "env": {
        "node": true
      }
    },
    {
      "files": [
        "**/__fixtures__/**/*.js",
        "**/__mocks__/**/*.js",
        "**/__tests__/**/*.js",
        "jest/**/*.js",
        "RNTester/**/*.js"
      ],
      "globals": {
        // Expose some Jest globals for test helpers
        "afterAll": true,
        "afterEach": true,
        "beforeAll": true,
        "beforeEach": true,
        "expect": true,
        "jest": true
      }
    },
    {
      "files": ["**/__tests__/**/*-test.js"],
      "env": {
        "jasmine": true,
        "jest": true
      }
    }
  ]
}
