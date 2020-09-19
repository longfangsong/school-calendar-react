const path = require('path');
const {merge} = require('webpack-merge');
const baseConfig = require('./webpack.base.js');

const devConfig = {
    mode: 'development',
    entry: path.join(__dirname, "../example/src/index.tsx"),
    resolve: {
        extensions: ['.js', '.jsx', '.json', '.ts', '.tsx']
    },
    output: {
        path: path.join(__dirname, "../example/src/"),
        filename: "bundle.js",
    },
    devServer: {
        contentBase: path.join(__dirname, '../example/src/'),
        compress: true,
        host: '127.0.0.1',
        port: 3001,
        open: true
    },
};
module.exports = merge(baseConfig, devConfig);
