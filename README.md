# backbone-require-singleton
Example project that shows the use of singletons and pub/sub to decouple Backbone applications.

## Features
* Module bootstrap: Use of singletons and requirejs to automatically load and initialize all the routers
* Application shell: A module that acts as the application shell providing authentication, navigation, header, footer and container
* Module independency: Modules are decoupled by using a pub/sub module
* Registration based navigation: Each router can register a navigation element with the nav system to provide access to the app’s root route

## Getting Started

```
npm install
bower install
grunt serve
```
