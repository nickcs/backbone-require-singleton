/*global define*/

define([
    'jquery',
    'underscore',
    'backbone'
], function ($, _, Backbone) {
    'use strict';

    var NavItemView = Backbone.View.extend({
        template: _.template('<li><a href="#<%=route%>"><%=title%></a></li>'),

        serializeData: function() {
            return this.model.toJSON();
        },

        selected: function(val) {
            this.$el.toggleClass('active', val);
        }
    });

    return NavItemView;
});
