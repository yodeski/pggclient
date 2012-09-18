module.exports = function(app) {
  app.get('/default', function(req, res) {
    res.redirect('/');
  });

  app.get('/', function(req, res) {
    res.render('index', {
      page: 'index',
    });
  });

  app.post('/getMenu', function (req, res) {
      var myMenu = require('../resources/leftMenu.json');
      res.send(myMenu);
  });

};
