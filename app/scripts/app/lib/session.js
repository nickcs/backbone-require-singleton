define([
    'jquery',
    'backbone',
    'broker',
    'jquery.cookie',
    'localstorage'
], function($, Backbone, broker, Cookie, localstorage) {
    'use strict';

    var localStorage = new Backbone.LocalStorage('sessions');

    var SessionModel = Backbone.Model.extend({
        localStorage: localStorage,

        hasCookie: function(){
            if($.cookie('cookie_name') === ''){
                return false;
            }else{
                this.set('session', $.cookie('cookie_name'));
                return true;
            }
        }
    });

    var Session = Backbone.Collection.extend({
        localStorage: localStorage,

        model: SessionModel,

        isLoggedIn: function() {
            return (this.length > 0);
        },

        login: function(options){
            var model = new SessionModel({
                userId: options.email,
                accountId : '60',
                accounts  : [{
                  name: 'CoSo',
                  accountId: '10'
                }, {
                  name: 'CSXGM',
                  accountId: '60'
                }]
            });
            this.add(model);
            if (options.remember) {
                model.save();
            }
            broker.channel('session').publish('login',this);
        },

        logout: function() {
            this.at(0).destroy().then(function(){
                broker.channel('session').publish('logout',this);
            });
        }
    });

    var session = new Session();
    session.fetch();
    return session;
});
