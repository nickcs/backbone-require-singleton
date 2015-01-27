/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates',
    'broker',
    'session',
    '../collections/nav-items',
    './nav-item'
], function ($, _, Backbone, JST, broker, session, NavCollection, NavItemView) {
    'use strict';

    var NavView = Backbone.View.extend({
        template: JST['app/scripts/app/templates/nav.ejs'],

        initialize: function() {
            this.collection = new NavCollection();

            this.listenTo(this.collection, 'add', this.loadItems);
            broker.channel('session').subscribe('login', this.loadItems, this);
            broker.channel('session').subscribe('logout', this.removeSubViews, this);
            Backbone.history.on('route', this.highlightNavItem, this);
        },

        loadItems: function() {
            this.removeSubViews();
            this.collection.forEach(this.addNavItem,this);
        },

        addNavItem: function(navItem) {
            if (session.isLoggedIn()) {
                this.addSubView({
                    view: new NavItemView({model: navItem}),
                    selector: 'ul',
                    location: 'preprend'
                });
            }
        },

        getSubViewForModel: function(model) {
            var subView = _.find(this._subViews, function(subView) {
              return (subView.view.model && subView.view.model === model);
            });
            if (subView) {
                return subView.view;
            }
            return subView;
        },

        highlightNavItem: function(router, route, params) {
            this.collection.forEach(function(item){
                var view = this.getSubViewForModel(item);
                if (view) {
                    view.selected(item.get('handler') === route);
                }
            }, this);
        }
    });

    return NavView;
});
