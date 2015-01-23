/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates',
    'broker'
], function ($, _, Backbone, JST, broker) {
    'use strict';

    var NavView = Backbone.View.extend({
        template: JST['app/scripts/templates/nav.ejs'],

        items: [],

        initialize: function() {
            broker.channel('nav').subscribe('register', this.registerItem, this);
            Backbone.history.on('route', this.highlightNavItem, this);
        },

        registerItem: function(navItem) {
            this.items.push(navItem);
            this.$('ul').append(navItem.render().el);
        },

        highlightNavItem: function(router, route, params) {
            this.items.forEach(function(item){
                item.selected(item.handler === route);
            });
        }


    });

    return new NavView().render();
});
