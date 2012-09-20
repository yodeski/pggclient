/* Author:

*/
window.App = Ember.Application.create({
    
    // When everything is loaded.
    ready: function () {

        App.leftMenu.getItems();
        App.leftMenu.adjustMainContent();

    }
});

App.LeftMenu = Ember.Object.extend({
    id:null,
    text: null,
    icon: null,
    color: '#000',
    hovercolor: null

});

App.leftMenu = Em.ArrayController.create({
    // Default collection is an empty array.
    content: [],

    // Simple id-to-model mapping for searches and duplicate checks.
    _idCache: {},

    addItem: function (item) {
        var id = item.get("id");
        // If we don't already have an object with this id, add it.
        if (typeof this._idCache[id] === "undefined") {
            this.pushObject(item);
            var $_li = $('<li class="btn-large pointer nobckg" style="color:' + item.color + '"><a href="' + item.ref + '" class="nobckg style="color:' + item.color + '"><i class="' + item.icon + ' icon-large text-shadow"></i>  <small style="font-size:12px;">' + item.text + '</small></a></li>');

            $('ul#leftMenu').append($_li);

            this._idCache[id] = item.id;
        }
    },

    getItems: function () {
        var query = this.get("query");
        var self = this;
        var url = "getMenu";
        $.post(url, function (data) {
            // Make a model for each result and add it to the collection.
            for (var i = 0; i < data.results.length; i++) {
                self.addItem(App.LeftMenu.create(data.results[i]));
            }
        });
    },

    adjustMainContent: function() {
        var docH = $(document).height();
        var headH = $("#divHeader").height();
        var footH = $("#divfooter").height();
        $("#maincontent").height(docH - headH - footH - 130);
    }
});