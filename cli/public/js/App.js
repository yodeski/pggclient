/* Author:

*/
window.App = Ember.Application.create({
    
    // When everything is loaded.
    ready: function () {

        App.leftMenu.getItems();
        this.adjustMainContent();
        $('ul#leftMenu').live('mousedown', function(e) {
            e.stopPropagation();
            $(".popover").remove();
        });
    },

    adjustMainContent: function() {
        var docH = $(document).height();
        var headH = $("#divHeader").height();
        var footH = $("#divfooter").height();
        $("#maincontent").height(docH - headH - footH - 130);
    }
});

App.LeftMenu = Ember.Object.extend({
    id:null,
    text: null,
    icon: null,
    color: '#000',

});

App.leftMenu = Em.ArrayController.create({
    // Default collection is an empty array.
    content: [],
    // Simple id-to-model mapping for searches and duplicate checks.
    _idCache: {},
    _currMenu: undefined,
    addItem: function (item) {
        var id = item.get("id");
        // If we don't already have an object with this id, add it.
        if (typeof this._idCache[id] === "undefined") {
            this.pushObject(item);
            var relpop = (item.source=='popover') ? '' : 'popover';
            var href = (item.source=='popover') ? '#' : item.ref;
            var $_li = $('<li class="pointer" style="line-height:30px; color:' + item.color + '"><a rel="' + relpop + '" href="' + href + '" class="text-shadow" style="color:' + item.color + '"><i class="' + item.icon + ' icon-large text-shadow"></i>  <small style="font-size:12px;">' + item.text + '</small></a></li>');

            $('ul#leftMenu').append($_li);

            this._idCache[id] = item.id;
            if(item.source=='popover')
                this.initPopOver($_li, item);
        }
    },
    initPopOver: function(elem, item) {
        $.get(item.ref, function(d) {
            elem.clickover({
                html: true,
                title: item.text,
                trigger:'click',
                placement:'belowRight',
                content: d
            });
        });
        elem.live('click', function(e) {
            $(this).clickover('show');
            e.preventDefault();
        });   
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




});