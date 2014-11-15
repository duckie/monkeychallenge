require(['require', 'scripts/config-require'], function (require, config) {
  config.urlArgs = 'bust=v0.4.0';
  requirejs.config(config);
  require(['./scripts/main.js']);
});
