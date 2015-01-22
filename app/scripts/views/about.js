/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates'
], function ($, _, Backbone, JST) {
    'use strict';

    var AboutView = Backbone.View.extend({
        template: JST['app/scripts/templates/about.ejs'],
    });

    return AboutView;
});
