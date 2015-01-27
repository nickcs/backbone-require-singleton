/*global define*/

define([
    'backbone',
    'broker',
    './views/about'
], function (Backbone, broker, AboutView) {
    'use strict';

    var AboutRouter = Backbone.Router.extend({

        initialize: function() {
            broker.channel('nav').publish('register', {
                title: 'About',
                route: 'about',
                handler: 'showAbout',
                product: 'about',
                zindex: 10
            });
            this.route('about', 'showAbout');
        },

        showAbout: function(){
            broker.channel('container').publish('show', new AboutView());
        }

    });

    return new AboutRouter();
});
