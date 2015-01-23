define([
    'backbone',
    'broker',
    './views/home'
], function (Backbone, broker, HomeView) {
    'use strict';

    var HomeRouter = Backbone.Router.extend({

        initialize: function() {
            broker.channel('nav').publish('register', {
                title: 'Home',
                route: '',
                handler: 'showHome',
                zindex: 0
            });
            this.route('', 'showHome');
        },

        showHome: function(){
            broker.channel('container').publish('show', new HomeView());
        }

    });

    return new HomeRouter();
});
