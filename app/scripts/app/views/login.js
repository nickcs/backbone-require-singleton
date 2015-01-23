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
            session.login();
            // this.model.set(this.serializeForm('form'));
            // if (this.model.get('remember'))
            //     this.model.save();
        }
    });

    return LoginView;
});
