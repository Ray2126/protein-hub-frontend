module.exports = {
  devServer: {
    proxy: {
      '^/api': {
        target: 'https://xs1lpp63h7.execute-api.ap-southeast-2.amazonaws.com/Prod/',
        pathRewrite: { '^/api': '/' },
        logLevel: 'debug',
      }
    }
  }
};