// Define a module to return an event aggrigator object extended from Backbone.Events.
'use strict';
define(['underscore', 'backbone'], function (_, Backbone) {
    var started = false;
    var channels = [];

    var Channel = function(name) {
        this.name = name;
        this.queue = [];
    }

    _.extend(Channel.prototype, Backbone.Events, {
        publish: function() {
            if (arguments.length > 0) {
                this.queue.push(arguments);
            }
            if (started) {
                this.queue.forEach(function(args){
                    this.trigger.apply(this, args);
                }.bind(this));
            }
        },

        subscribe: function() {
            this.on.apply(this, arguments);
        }

    });

    return {
        channel: function(name) {
            if (name && name.length > 0) {
                var results = channels.filter(function(channel){
                    if (channel.name === name) {
                        return channel;
                    }
                });
                if (results.length > 0) {
                    return results[0];
                } else {
                    var channel = new Channel(name);
                    channels.push(channel);
                    return channel;
                }
            }
        },

        start: function() {
            started = true;
            channels.forEach(function(channel){
                channel.publish();
            });
        },

        stop: function() {
            started = false;
        }

    };
});
