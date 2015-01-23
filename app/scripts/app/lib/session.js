define([
    'jquery',
    'backbone',
    'broker',
    'jquery.cookie'
], function($, Backbone, broker, Cookie) {
    'use strict';

  var Session = Backbone.Model.extend({
    url: function(){
      return '/session/continue';
    },

    isLoggedIn: function() {
        return (_.isUndefined(this.get('userId')));
    },

    login: function(userId){
        this.set({
            userId: userId,
            accountId : '60',
            accounts  : [{
              name: 'CoSo',
              accountId: '10'
            }, {
              name: 'CSXGM',
              accountId: '60'
            }]
        });
        broker.channel('session').publish('login',this);
    },

    logout: function() {
        this.set({
            userId: null,
            accountId: null,
            accounts: null
        });
        broker.channel('session').publish('logout',this);
    },

    hasCookie: function(){
      if($.cookie('cookie_name') === ''){
        return false;
      }else{
        this.set('session', $.cookie('cookie_name'));
        return true;
      }
    },

    parse: function(resp, xhr) {
      if(resp.success){
        this.set('session', resp.data.session);
        this.set('user', resp.data.user);
      }
    }
  });

  return new Session();
});
