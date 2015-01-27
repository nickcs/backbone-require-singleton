/*global define*/

define([
    'backbone',
    'broker',
    'session'
], function (Backbone, broker, session) {
    'use strict';

    var AppRouter = Backbone.Router.extend({
        routes: {
            'logout': 'logoutUser'
        },

        initialize: function() {
            broker.channel('nav').publish('register', {
                title: 'Logout',
                route: 'logout',
                handler: 'logoutUser',
                zindex: 100
            });
        },

        logoutUser: function(){
            session.logout();
        }

    });

    return new AppRouter();
});
