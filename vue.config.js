module.exports = {
    pages: {
        index: {
            // page 的入口
            entry: process.env.NODE_ENV === 'production' ? 'src/index.js' : 'dev/main.js',
            // 模板来源
            template: 'public/index.html',
            // 输出文件名
            filename: 'index.html'
        }
    },
    devServer: {
        // 设置端口
        port: 18080,
    },
    // 如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建。  
    productionSourceMap: false
}