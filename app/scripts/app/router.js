/*global define*/

define([
    'backbone',
    'broker',
    'session'
], function (Backbone, broker, session) {
    'use strict';

    var AppRouter = Backbone.Router.extend({

        initialize: function() {
            broker.channel('nav').publish('register', {
                title: 'Logout',
                route: 'logout',
                handler: 'logoutUser',
                zindex: 100
            });
            this.route('logout', 'logoutUser');
        },

        logoutUser: function(){
            session.logout();
        }

    });

    return new AppRouter();
});
