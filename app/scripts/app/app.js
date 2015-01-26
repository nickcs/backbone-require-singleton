define([
    'jquery',
    'backbone',
    'broker',
    'session',
    './views/nav',
    './views/body',
    './views/footer',
    './views/login'
], function ($, Backbone, broker, session, NavView, BodyView, FooterView, LoginView) {
    'use strict';

    Backbone.View.prototype.attachToTemplate = true;

    // create application container view
    var container = new Backbone.View({el: '.container'});

    // build structure of the container view
    container.addSubView({view: new NavView()});
    container.addSubView({view: new BodyView()});
    container.addSubView({view: new FooterView()});

    broker.channel('app').subscribe('loaded', function(){
        if (session.isLoggedIn()) {
            broker.channel('session').publish('login',session);
        } else {
            broker.channel('container').publish('show', new LoginView());
        }
    });

    broker.channel('session').subscribe('login', function(){
        Backbone.history.start();
    });

    broker.start();
});
