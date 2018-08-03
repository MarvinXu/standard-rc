module.exports = {
  baseUrl: './',
  chainWebpack: config => {
    config
      .plugin('sentry')
      .use(require('@sentry/webpack-plugin'), [{
        include: 'dist/js',
        urlPrefix: '~/js',
        ignoreFile: '.sentrycliignore',
        configFile: 'sentry.properties',
        debug: true,
        validate: true
      }])
  }
}
