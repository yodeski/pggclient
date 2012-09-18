var DBWrapper = require('node-dbi').DBWrapper;
var DBExpr = require('node-dbi').DBExpr;
var pg = require('pg');
var dacFactory;

module.exports = {

    init: function (config, callback) {
        //var dbConnectionConfig = { host: config.pghost, user: config.pguser, password: config.pgpass, database: config.pgdb };
        var connectionString = "pg://" + config.pguser + ":" + config.pgpass + "@" + config.pghost + ":5432/" + config.pgdb;
        var error = null;

        pg.connect(connectionString, function (err, client) {
            callback(client);
        });

        //dacFactory = new DBWrapper('pg', dbConnectionConfig);
        //dacFactory.connect(callback);
        //callback(dacFactory);
    }

    //other-stufs: function (params, cb) {
    //    database.query(params, cb);
    //}

};


