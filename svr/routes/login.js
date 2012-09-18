var util = require('util');
var dacFactory = require('../dac/dac');
var dacUser = require('../dac/dacUser');

module.exports = function (app) {
  app.get('/login', function(req, res) {
    res.render('login', {
      page: 'login',
    });
  });

  app.post('/login', function (req, res) {
    req.assert('username', 'Invalid postparam').notEmpty();
    req.assert('password', 'Invalid getparam').notEmpty();
    req.sanitize('username').toString();
    req.sanitize('password').toString();

    var errors = req.validationErrors();
    if (errors) {
        res.send('There have been validation errors: ' + util.inspect(errors), 500);
        return;
    }

    dacFactory.init(app.config, function (result) {
        var client = result;
        dacUser.validateLogin(client, req.body.username, req.body.username, req.body.password, function (data) {
            if (!data.error) {
                console.log(data.rows[0]);
                if (data.rows[0] && data.rows[0].active == true)
                    res.redirect('/default');
                else {
                    res.send('usuario inexsistente o inactivo', 500);
                }
            }
            else
                res.send(result.error, 500);
        });
    });

    
  });
};
