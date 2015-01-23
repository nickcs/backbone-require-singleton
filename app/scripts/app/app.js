define([
    'jquery',
    'backbone',
    'broker',
    './views/nav',
    './views/footer'
], function ($, Backbone, broker, navView, FooterView) {
    'use strict';

    Backbone.View.prototype.attachToTemplate = true;

    // create application container view
    var container = new Backbone.View({el: '.container'});
    // create body view that modules will use for display
    var body = new Backbone.View();

    // build structure of the container view
    container.addSubView({view: navView});
    container.addSubView({view: body});
    container.addSubView({view: new FooterView()});

    broker.channel('container').subscribe('show', function(view){
        body.setView(view);
    });

    broker.start();
});
