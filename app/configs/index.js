'use strict';

var sharedConfig = require('./shared.config');

module.exports.development = Object.assign({}, sharedConfig, require('./development.config'));
module.exports.production = Object.assign({}, sharedConfig, require('./production.config'));
