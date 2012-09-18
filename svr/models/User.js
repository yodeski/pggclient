/** Encryption dependencies. */
var crypto = require('crypto');

module.exports = function(pg, app) {
  var Schema = pg.defaults;
  var client = pg.Client({
      user: app.config.pguser,
      password: app.config.pgpass,
      database: app.config.pgdb,
      host: app.config.pghost,
      port: app.config.pgport
  });
  /** A user. */
  User = new Object({
    username: {
      type: String,
      required: true,
      index: {
        unique: true
      }
    },
    hashed_password: {
      type: String,
      required: true
    }
  });

}
