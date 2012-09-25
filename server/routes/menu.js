module.exports = function(app) {
  
  app.get('/getTemplate', function (req, res) {
      var myMenu = require('../resources/leftMenu.json');
      res.render('partials/leftNav',{ menuItems: myMenu });
  });

  app.post('/getMenu', function (req, res) {
      var myMenu = require('../resources/leftMenu.json');
      res.send(myMenu);
  });

  app.get('/mytables', function (req, res) {
      UserSource.getUserSources(app.config, 'yodeski@gmail.com', function(data) {
        res.render('partials/mytables',{ sources: data.obj, error: data.error });  
      })  
  });
};
