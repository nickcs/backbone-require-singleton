/*global define*/

define([
    'jquery',
    'underscore',
    'backbone'
], function ($, _, Backbone) {
    'use strict';

    var NavItemView = Backbone.View.extend({
        template: _.template('<li><a href="#<%=route%>"><%=title%></a></li>'),

        initialize: function(title,route,handler) {
            this.title = title;
            this.route = route;
            this.handler = handler;
        },

        selected: function(val) {
            this.$el.toggleClass('active', val);
        }
    });

    return NavItemView;
});
