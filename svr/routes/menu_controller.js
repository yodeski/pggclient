module.exports = function(app) {
  app.get('/mytables', function(req, res) {
    res.render('partials/mytables', {layout: false, data: ''});
  });

  app.post('/getMenu', function (req, res) {
      var myMenu = require('../resources/leftMenu.json');
      res.send(myMenu);
  });

};
