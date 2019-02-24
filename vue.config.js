var SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin')
module.exports = {
    configureWebpack: {
        plugins: [
            new SWPrecacheWebpackPlugin({
                cacheId: 'app',
                filename: 'service-worker.js',
                runtimeCaching: [{
                    urlPattern: '/',
                    handler: 'cacheFirst',
                }]
            })
        ]
    }
}