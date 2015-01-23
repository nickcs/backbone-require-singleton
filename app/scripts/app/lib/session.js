// Define a module to return an event aggrigator object extended from Backbone.Events.
'use strict';
define(['jquery', 'backbone', 'jquery.cookie'], function($, Backbone, Cookie) {

  var Session = Backbone.Model.extend({
    defaults: {
      session           : null,
      user              : {}
    },
    url : function(){
      return '/session/continue';
    },
    getUser : function(){
      return this.model.get('user');
    },
    hasCookie : function(){
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
    },
    initialize: function(model) {
      this.model = this;
    }
  });

  return new Session;
});
