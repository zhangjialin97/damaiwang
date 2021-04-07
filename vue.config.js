module.exports = {
    devServer: {
        host: 'localhost',
        port: 8081,
        https: false,
        open: false,
        proxy: {
            '/api': {
                target: "http://localhost:8081",
                changeOrigin: true, //可否跨域
                pathRewrite: {
                    '^/api': '' //重写接口，去掉/paas
                }
            }
        }
    }

}