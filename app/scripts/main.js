'use strict';
define([
    'backbone',
    'session',
    'views/nav',
    'views/footer'
], function (Backbone, session, NavView, FooterView) {

    Backbone.View.prototype.attachToTemplate = true;

    // create application container view
    var container = new Backbone.View({el: '.container'});
    // create body view that modules will use for display
    var body = new Backbone.View();

    // build structure of the container view
    container.addSubView({view: new NavView()});
    container.addSubView({view: body});
    container.addSubView({view: new FooterView()});

    session.on('container:show', function(view){
        body.setView(view);
    });

    Backbone.history.start();

    session.trigger('app:started');
});
