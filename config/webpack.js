const path = require('path')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const {VueLoaderPlugin} = require('vue-loader')

/**
 *
 * @param conf - webpack configuration options to figure out how to build application
 * @param conf.directory - the component directory so the base configuration can perform the proper operations
 * @param conf.environment - can be either 'production' or 'development'. determines specific env configurations, such as sourcemaps
 * @param conf.library - If the component is a library. Can be set to true, or contain an object (see below)
 * @param conf.library.name - the name of the library
 * @param conf.library.type - the type of library. The default is 'umd' (universal module definition). Please see https://webpack.js.org/configuration/output/#output-librarytarget
 *
 */

const config = (conf) => {
    conf = conf || {}
    const baseWebpackConfig =
        {
            output: {
                path: path.resolve(conf.directory, 'dist'),
                filename: 'index.js'
            },
            module: {
                rules: [
                    {
                        test: /\.vue$/,
                        loader: 'vue-loader'
                    },
                    {
                        test: /\.pug$/,
                        oneOf: [
                            // this applies to <template lang="pug"> in Vue components
                            {
                                resourceQuery: /^\?vue/,
                                use: ['pug-plain-loader']
                            },
                            // this applies to pug imports inside JavaScript
                            {
                                use: ['raw-loader', 'pug-plain-loader']
                            }
                        ]
                    },

                    {
                        test: /\.js$/,
                        exclude: /node_modules/,
                        use: {
                            loader: 'babel-loader',
                            options: {
                                //search for babel.config.js inside root directory
                                root: path.resolve(__dirname, "../")
                            }
                        }
                    },
                    {
                        test: /\.tsx?$/,
                        loader: "ts-loader",
                        options: {
                            appendTsSuffixTo: [/\.vue$/],
                        }
                    },
                    {
                        test: /\.styl$/,
                        use: [{loader: 'vue-style-loader'}, {loader: "css-loader"}, {loader: "stylus-loader"}]
                    },
                    {
                        test: /\.css$/,
                        use: [{loader: 'vue-style-loader'}, {loader: "css-loader"}, {loader: 'resolve-url-loader'}]
                    },
                    {
                        test: /\.scss/,
                        use: [
                            {loader: 'vue-style-loader'},
                            {
                                loader: 'css-loader',
                                options: {
                                    sourceMap: true
                                }
                            },
                            {
                                loader: 'resolve-url-loader'
                            },
                            {
                                loader: 'sass-loader',
                                options: {
                                    sourceMap: true
                                }
                            }
                        ]
                    }
                ]
            },
            resolve: {
                extensions: [".ts", ".tsx", '.js', '.vue', '.json'],
                alias: {'vue$': 'vue/dist/vue.esm.js'}
            },
            plugins: [
                new VueLoaderPlugin(),
                new CleanWebpackPlugin({
                  cleanAfterEveryBuildPatterns: path.resolve(conf.directory, 'dist')
                })
            ]
        };
    if (conf.library) {
        baseWebpackConfig.output.library = conf.library.name || ''
        baseWebpackConfig.output.libraryTarget = conf.library.type || 'umd' // so we can load and export functions
    }
    baseWebpackConfig.devtool = conf.environment == 'development' ? 'eval-source-map' : 'source-map'
    baseWebpackConfig.mode = conf.environment == 'development' ? 'development' : 'production'
    if (conf.environment == 'development') {
        /**
         * We dont want image loaders turned on for distribution builds.  This will be turned off for prod builds and webpack will "yell at you"
         */
        baseWebpackConfig.module.rules = [
            ...baseWebpackConfig.module.rules,
            {
                test: /\.(png|jpg|gif)$/,
                loader: "file-loader?name=images/[name].[ext]?[hash]",
            },
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "url-loader?limit=10000&mimetype=application/font-woff&name=fonts/[name].[ext]"
            },
            {
                test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "file-loader?name=fonts/[name].[ext]"
            }
        ]
    }
    return baseWebpackConfig;

}

module.exports = env => config(env)
