/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'broker'
], function ($, _, Backbone, broker) {
    'use strict';

    var BodyView = Backbone.View.extend({
        initialize: function() {
            broker.channel('container').subscribe('show', this.setView, this);
        }
    });

    return BodyView;
});
