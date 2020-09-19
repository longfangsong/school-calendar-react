const path = require('path');
const {merge} = require('webpack-merge');
const baseConfig = require('./webpack.base.js');

const prodConfig = {
    mode: 'production',
    entry: path.join(__dirname, "../src/Calendar.tsx"),
    output: {
        path: path.join(__dirname, "../dist/"),
        filename: "bundle.js",
        libraryTarget: 'umd',
        libraryExport: 'default',
    },
    externals: {
        react: {
            root: "React",
            commonjs2: "react",
            commonjs: "react",
            amd: "react"
        },
        "react-dom": {
            root: "ReactDOM",
            commonjs2: "react-dom",
            commonjs: "react-dom",
            amd: "react-dom"
        }
    },
};

module.exports = merge(baseConfig, prodConfig);
