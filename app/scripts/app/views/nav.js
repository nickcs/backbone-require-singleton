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
        template: JST['app/scripts/app/templates/nav.ejs'],

        items: [],

        initialize: function() {
            broker.channel('nav').subscribe('register', this.registerItem, this);
            Backbone.history.on('route', this.highlightNavItem, this);
        },

        sortNavItems: function() {
            return this.items.sort(function(a,b){
                if (a.zindex < b.zindex) {
                    return -1;
                }
                if (a.zindex > b.zindex) {
                    return 1;
                }
                return 0;
            }).map(function(item){
                return item.render().$el;
            });
        },

        registerItem: function(navItem) {
            this.items.push(navItem);
            this.$('ul').empty();

            this.$('ul').append(this.sortNavItems());
        },

        highlightNavItem: function(router, route, params) {
            this.items.forEach(function(item){
                item.selected(item.handler === route);
            });
        }


    });

    return new NavView().render();
});
