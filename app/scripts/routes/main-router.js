/*global define*/

define([
    'jquery',
    'backbone',
    'session',
    '../views/home',
    '../views/about'
], function ($, Backbone, session, HomeView, AboutView) {
    'use strict';

    var MainRouter = Backbone.Router.extend({
        routes: {
            '': 'showHome',
            'about': 'showAbout'
        },

        initialize: function() {
            // session.on('app:started', function() {
            //     session.trigger('nav:register', {
            //         template: '<li class="active"><a href="#">Home</a></li>',
            //         route: ''
            //     });
            // });
        },

        showHome: function(){
            session.trigger('container:show', new HomeView());
        },

        showAbout: function(){
            session.trigger('container:show', new AboutView());
        }

    });

    return new MainRouter();
});
