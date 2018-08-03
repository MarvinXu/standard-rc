module.exports = {
  baseUrl: '/youpin/test/',
  chainWebpack: config => {
    config
      .plugin('sentry')
      .use(require('@sentry/webpack-plugin'), [{
        release: '0.0.1',
        include: 'dist/js',
        urlPrefix: '~/youpin/test/js/',
        ignoreFile: '.sentrycliignore',
        configFile: 'sentry.properties',
        debug: true,
        validate: true
      }])
  }
}
