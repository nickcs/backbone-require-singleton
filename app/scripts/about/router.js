/*global define*/

define([
    'backbone',
    'broker',
    './views/about'
], function (Backbone, broker, AboutView) {
    'use strict';

    var AboutRouter = Backbone.Router.extend({
        routes: {
            'about': 'showAbout'
        },

        initialize: function() {
            broker.channel('nav').publish('register', {
                title: 'About',
                route: 'about',
                handler: 'showAbout',
                product: 'about',
                zindex: 10
            });
        },

        showAbout: function(){
            broker.channel('container').publish('show', new AboutView());
        }

    });

    return new AboutRouter();
});
