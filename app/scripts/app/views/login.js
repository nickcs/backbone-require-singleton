/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates',
    'session'
], function ($, _, Backbone, JST, session) {
    'use strict';

    var LoginView = Backbone.View.extend({
        template: JST['app/scripts/app/templates/login.ejs'],

        events: {
            'click button': 'signIn'
        },

        serializeData: function() {
            return {
                email: '',
                remember: true
            }
        },

        signIn: function(event) {
            event.preventDefault();
            var options = this.serializeForm('form');
            session.login(options, this.$('form').serialize(), function(err, result){
                if (err) {
                    this.$('.alert').removeClass('hidden');
                }
            });
        }
    });

    return LoginView;
});
