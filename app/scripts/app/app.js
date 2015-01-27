define([
    'backbone',
    'composer',
    'broker',
    'session',
    './views/nav',
    './views/body',
    './views/footer',
    './views/login'
], function (Backbone, composer, broker, session, NavView, BodyView, FooterView, LoginView) {
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
            broker.channel('session').publish('logout');
        }
    });

    broker.channel('session').subscribe('login', function(){
        Backbone.history.start();
    });

    broker.channel('session').subscribe('logout', function(){
        Backbone.history.navigate('#');
        Backbone.history.stop();
        broker.channel('container').publish('show', new LoginView());
    });

    broker.start();
});
