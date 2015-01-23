define([
    'backbone',
    'broker',
    'nav-item',
    './views/home'
], function (Backbone, broker, NavItemView, HomeView) {
    'use strict';

    var MainRouter = Backbone.Router.extend({

        initialize: function() {

            var navItem = new NavItemView('Home','','showHome',0);

            this.route(navItem.route, navItem.handler);
            broker.channel('nav').publish('register', navItem);
        },

        showHome: function(){
            broker.channel('container').publish('show', new HomeView());
        }

    });

    return new MainRouter();
});
