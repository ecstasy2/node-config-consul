'use strict';

var config = require('config');
var consulMod = require('consul');

module.exports.load = function loadConfig() {
  if (!config.consul || !config.consul.host) {
    return Promise.resolve(config);
  }

  var consulCli = consulMod({
    host: config.consul.host,
    port: config.consul.port || 8500,
    promisify: true
  });
};
