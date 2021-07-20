module.exports = {
  devServer: {
    proxy: {
      '^/api': {
        target: 'https://90yd15q08j.execute-api.ap-southeast-2.amazonaws.com/Prod/',
        pathRewrite: { '^/api': '/' },
        logLevel: 'debug',
      }
    }
  }
};