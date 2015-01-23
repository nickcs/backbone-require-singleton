/*global define*/

define([
    'backbone',
    'broker',
    'nav-item',
    './views/about'
], function (Backbone, broker, NavItemView, AboutView) {
    'use strict';

    var MainRouter = Backbone.Router.extend({

        initialize: function() {
            var navItem = new NavItemView('About','about','showAbout',10);

            this.route(navItem.route, navItem.handler);
            broker.channel('nav').publish('register', navItem);
        },

        showAbout: function(){
            broker.channel('container').publish('show', new AboutView());
        }

    });

    return new MainRouter();
});
