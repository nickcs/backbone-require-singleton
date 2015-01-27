/*global define*/

define([
    'backbone',
    'broker'
], function (Backbone, broker) {
    'use strict';

    var NavCollection = Backbone.Collection.extend({
        comparator: 'zindex',

        initialize: function() {
            broker.channel('nav').subscribe('register', this.registerItem, this);
        },

        registerItem: function(options){
            var item = new Backbone.Model(options);
            this.add(item);
        }

    });

    return NavCollection;
});
