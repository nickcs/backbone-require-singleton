// Define a module to return an event aggrigator object extended from Backbone.Events.
'use strict';
define(['underscore', 'backbone'], function (_, Backbone) {
    return _.extend({
        send: function() {
            this.trigger.apply(this, arguments);
        }
    }, Backbone.Events);
});
