define([
    'backbone',
    'broker',
    './views/home'
], function (Backbone, broker, HomeView) {
    'use strict';

    var HomeRouter = Backbone.Router.extend({
        routes: {
            '': 'showHome'
        },

        initialize: function() {
            broker.channel('nav').publish('register', {
                title: 'Home',
                route: '',
                handler: 'showHome',
                zindex: 0
            });
        },

        showHome: function(){
            broker.channel('container').publish('show', new HomeView());
        }

    });

    return new HomeRouter();
});
