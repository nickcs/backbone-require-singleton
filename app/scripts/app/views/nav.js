/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates',
    '../collections/nav-items',
    './nav-item'
], function ($, _, Backbone, JST, NavCollection, NavItemView) {
    'use strict';

    var NavView = Backbone.View.extend({
        template: JST['app/scripts/app/templates/nav.ejs'],

        initialize: function() {
            this.collection = new NavCollection();

            this.listenTo(this.collection, 'reset', this.removeSubViews);
            this.listenTo(this.collection, 'add', this.loadItems);
            Backbone.history.on('route', this.highlightNavItem, this);
        },

        loadItems: function() {
            this.removeSubViews();
            this.collection.forEach(this.addNavItem,this);
        },

        addNavItem: function(navItem) {
            this.addSubView({
                view: new NavItemView({model: navItem}),
                selector: 'ul',
                location: 'preprend'
            });
        },

        getSubViewForModel: function(model) {
            var subView = _.find(this._subViews, function(subView) {
              return (subView.view.model && subView.view.model === model);
            });
            return subView.view;
        },

        highlightNavItem: function(router, route, params) {
            this.collection.forEach(function(item){
                this.getSubViewForModel(item).selected(item.get('handler') === route);
            }, this);
        }
    });

    return new NavView().render();
});
