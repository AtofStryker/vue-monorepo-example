module.exports = function (api) {
    api.cache(true)
    return require("./.babelrc.json")
}
