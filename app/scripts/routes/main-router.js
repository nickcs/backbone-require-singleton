/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'broker',
    '../views/nav-item',
    '../views/home',
    '../views/about'
], function ($, _, Backbone, broker, NavItemView, HomeView, AboutView) {
    'use strict';

    var MainRouter = Backbone.Router.extend({

        initialize: function() {
            var navItems = [
                new NavItemView('Home','','showHome'),
                new NavItemView('About','about','showAbout')
            ];

            navItems.forEach(function(item){
                this.route(item.route, item.handler);
                broker.channel('nav').publish('register', item);
            }.bind(this));
        },

        showHome: function(){
            broker.channel('container').publish('show', new HomeView());
        },

        showAbout: function(){
            broker.channel('container').publish('show', new AboutView());
        }

    });

    return new MainRouter();
});
