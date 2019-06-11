var path = require('path')

module.exports = {
    webpackConfig: require('./webpack.config.js'),
    dangerouslyUpdateWebpackConfig: function (webpackConfig, env) {
        webpackConfig.entry.unshift("@babel/polyfill")
        webpackConfig.output.path = path.resolve(__dirname, "dist/")
        return webpackConfig
    },
    title: "Component Documentation",
    usageMode: 'expand',
    components: path.resolve(__dirname, '../packages/**/**.vue')
};
