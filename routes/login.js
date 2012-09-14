var util = require('util');

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

    res.redirect('/default');
  });
};
