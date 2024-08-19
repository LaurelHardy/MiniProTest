module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:7788',
        ws: true,
        changeOrigin: true, //
		pathRewrite: {
				  '^/api': ''
		}
      }
    }
  }
}