# boilerplate draft for meteor + angular + typescript 
[![Build Status](https://api.travis-ci.org/ciekawy/meteor-ng2now-app.svg?branch=master)](https://travis-ci.org/ciekawy/meteor-ng2now-app)

Based on latest [angular2 now](https://github.com/pbastowski/angular2-now/tree/meteor1.2). From original angular2 now documentation it is not obvious (especially
 to meteor newbie) how to setup project to use TypeScript and also benefot from Intellij IDEA features related to all of it. 

This is project template that connect all the stuff together including TypeScript typings provided as meteor modules, DefinitelyTyped and just found in other places.

/typings contains `d.ts` files unavailable to be added using meteor dependencies. As for now typings contains both
typings resolved from DefinitelyTyped repo and manually downloaded files as well

It's also worth to read [angular-meteor](http://www.angular-meteor.com/tutorials/socially/angular2/bootstrapping) tutorials for both Angular 1 & 2 versions

### running
its enough to checkout and run `meteor`

it should be also possible to import project to IDEA and all Angular, TypeScript, meteor feature should be available (Meteor and AngularJS plugin need to be installed)

### testing
basic testing example is possible using [gagarin](https://github.com/anticoders/gagarin). 
more about using gagaring for testing meteor apps can be found at <https://hackpad.com/ep/pad/static/RzdMvlwyYHV>
another option (to be tried) is described here <http://g00glen00b.be/unit-testing-meteor-applications-with-velocity-jasmine-and-sinon-js/>
interesting would be to use typescript also for testing

### TODO
- describe project architecture
- more detailed step by step guide how to build this project from scratch
- server side angular
- tests examples (client/server)
- deployment on custom server/docker (ie using [mupx - latest Meteor Up](https://github.com/arunoda/meteor-up/tree/mupx))
- integrate ionic
- add android/iOS builds