/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates',
    'session'
], function ($, _, Backbone, JST, session) {
    'use strict';

    var NavView = Backbone.View.extend({
        template: JST['app/scripts/templates/nav.ejs'],

        items: [],

        initialize: function() {
            session.on('nav:register', this.registerItem, this);
        },

        registerItem: function(item) {
            this.items.push(item);
            this.$el.append(item.template);
        }
    });

    return NavView;
});
