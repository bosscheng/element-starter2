const path = require('path');

module.exports = {
    //
    dev: {
        //
        assetsSubDirectory: 'static',
        //
        assetsPublicPath: '/',
        //
        proxyTable: {
            '/api': {
                target: 'http://localhost:xxx',
                //target: 'http://gw.ai-cloud.io:9292',
                changeOrigin: true,
                logLevel: 'debug',
                pathRewrite: {
                    '^/api': ''
                }
            }
        },
        //
        host: 'localhost',
        //
        port: 3000,
        //
        autoOpenBrowser: true,
        //
        errorOverlay: true,
        //
        poll: false,
        //
        devtool: 'eval-source-map',
        //
        cssSourceMap: false
    },
    //
    build: {
        //
        index: path.resolve(__dirname, '../dist/index.html'),

        assetsRoot: path.resolve(__dirname, '../dist'),

        assetsSubDirectory: 'static',

        assetsPublicPath: './'
    }
}
