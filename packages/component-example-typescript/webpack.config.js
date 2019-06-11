const path  = require( 'path')
const nodeExternals  = require( 'webpack-node-externals')
const webpackRoot  = require( '../../config/webpack')
const webpackMerge  = require( 'webpack-merge')
const HtmlWebPackPlugin = require('html-webpack-plugin')

const config = (conf) => {
    let webpackConfig = {}
    let CLIOptions = {}

    CLIOptions.environment = (conf && conf.environment) ? conf.environment : "production" // options: "development" or "production"

    /**
     *  Specific webpack configurations per environment
     *
     *  ex: development
     *  developers would like to deploy their code to the dev server to have a 'sandbox' for their component
     *
     *  ex: production
     *  This is our final product. The developer would likely want to bundle only their source files,
     *  dependencies will be built installed with the application consuming the package and bundled with the consuming application
     */

     //import your images by using require('assets/my-asset-name'). In dev mode, the asset will point here and the images will be loaded via image loader
    if(CLIOptions.environment == "development"){
        webpackConfig = webpackMerge(webpackConfig, {
            entry: [path.resolve(__dirname, "./example/index.js")],
            resolve: {
                alias: {
                 "@": path.resolve(__dirname,"./src"),
                 "@vue-mono/component-example-typescript": path.resolve(__dirname, './src/index.js'),
                 "assets": path.resolve(__dirname,'./src/assets')
                }
            },
            watch: true,
            output: {
                publicPath: "/" //expose output path when historical routing is used
            },
            plugins: [
                new HtmlWebPackPlugin({
                    template: "./example/index.html",
                    filename: "./index.html"
                })
            ]

        })
     }else{
        webpackConfig.entry = [path.resolve(__dirname, "./src/index.js")],
        webpackConfig.externals = [
            nodeExternals({modulesDir: path.resolve(__dirname, '../../node_modules')}),
            nodeExternals({modulesDir: path.resolve(__dirname, './node_modules')}),
            function(context, request, callback) {
                if (/^.*\.(png|jpg|gif|svg)/.test(request)){
                    return callback(null, 'commonjs ' + request);
                }
                callback()}
        ]
    }

    return webpackMerge(webpackConfig, webpackRoot({
            library: true,
            environment: CLIOptions.environment,
            directory: path.resolve(__dirname)
        })
    );

}

module.exports = env => config(env)
