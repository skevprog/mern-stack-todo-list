module.exports = {
    "env": {
        "node": true,
        "browser": true,
        "es6": true
    },
    "parser": "babel-eslint",
    "extends": "airbnb",
    "rules": {
        "react/jsx-filename-extension": [
            1,
            {
                "extensions": [
                    ".js",
                    ".jsx"
                ]
            }
        ],
        "react/prefer-stateless-function": [
            0,
            {
                "ignorePureComponents": true
            }
        ],
        "react/prop-types": 0,
        "react/button-has-type": 0,
    }
}
