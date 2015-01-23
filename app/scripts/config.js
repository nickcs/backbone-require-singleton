/*global require*/
'use strict';

require.config({
    deps: [
        'composer',
        'home/router',
        'about/router',
        'app/app'
    ],
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
        'nav-item': 'app/views/nav-item',
        broker: 'app/lib/broker',
        session: 'app/lib/session'
    }
});
