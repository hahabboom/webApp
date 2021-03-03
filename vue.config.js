
const path = require('path')

const resolve = dir => path.join(__dirname, dir)

module.exports = {
  // publicPath: '/', // 部署应用包时的基本 url，默认 cli 会假设应用被部署在一个域名的根路径上：http://www.app.com/；如果部署在子路径：http://www.app.com/path/ 则需修改 publicPath: '/path/'。设置为空字符串或相对路径 './' 则可以将包部署在任意路径
  outputDir: 'dist', // build 输出文件目录
  indexPath: 'index.html',
  assetsDir: 'static',
  productionSourceMap: false, // 打包时不需要生产环境的 source map
  publicPath: process.env.NODE_ENV === 'production'
    ? './'
    : '/',
  chainWebpack: config => { // 修改内部 webpack 配置
    config.resolve.alias // 路径别名
      .set('@', resolve('src'))
      // .set('@assets', resolve('src/assets'))
      // .set('@components', resolve('src/components'))
      // .set('@views', resolve('src/views'))
      // .set('@store', resolve('src/store'))
    config // 修改插件选项 https://github.com/jantimon/html-webpack-plugin#options
      .plugin('html')
      .tap(args => {
        args[0].title = "music box"
        return args
      })
    if (process.env.NODE_ENV === 'production') {
      // 为生产环境修改配置...
    } else {
      // 为开发环境修改配置...
    }
  },
  devServer: {
    host: '222.18.149.110',
    port: 9191,
    open: true, // 自动打开浏览器
    overlay: { // 让浏览器 overlay 同时显示警告和错误
      warnings: true,
      errors: true
    },
    proxy: { // 可配置多个代理
      '/api': {
        target: 'http://musicapi.leanapp.cn', // 代理目标
        ws: true,
        changeOrigin: true, // 开发环境跨域，在生产环境中还是由后端处理
        pathRewrite: {
          '^/api': '/'
        }
      }
    }
  }
}
