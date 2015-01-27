/*global require*/
'use strict';

require.config({
    deps: [
        'broker',
        'session',
        'home/router',
        'about/router',
        'app/router',
        'app/app'
    ],
    // wait for all the dependent modules (specifically the routers) to load
    // before starting history service
    callback: function(broker) {
        broker.channel('app').publish('loaded');
    },
    shim: {
        bootstrap: {
            deps: ['jquery'],
            exports: 'jquery'
        },
        'jquery.cookie': {
            deps: ['jquery'],
            exports: 'jquery'
        }
    },
    paths: {
        jquery: '../bower_components/jquery/dist/jquery',
        'jquery.cookie': '../bower_components/jquery.cookie/jquery.cookie',
        backbone: '../bower_components/backbone/backbone',
        underscore: '../bower_components/lodash/dist/lodash',
        bootstrap: '../bower_components/sass-bootstrap/dist/js/bootstrap',
        composer: '../bower_components/backbone.composer/backbone.composer',
        localstorage: '../bower_components/backbone.localstorage/backbone.localStorage',
        broker: 'lib/broker',
        session: 'app/lib/session'
    }
});
