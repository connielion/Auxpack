module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "node": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "airbnb/hooks",
        "airbnb"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "no-param-reassign": ["off"],
        "import/no-extraneous-dependencies": ["off"],
        "react/jsx-filename-extension": ["off"],
        "no-console": ["off"],
        "no-unused-vars": ["warn"],
        "import/no-unresolved": ["warn"]
    }
};