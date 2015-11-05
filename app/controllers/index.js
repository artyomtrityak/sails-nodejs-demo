'use strict';

module.exports = initializeRoutes;

function initializeRoutes(app) {
  app.use('/users', require('./users.controller'));
  app.use('/plays', require('./plays.controller'));
  app.use('/organized-plays', require('./organized-plays.controller'));
}
