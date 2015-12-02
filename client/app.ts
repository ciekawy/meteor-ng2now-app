import {Component, View, SetModule, bootstrap, State} from 'angular2now'

SetModule('app', ['angular-meteor', 'ui.router', 'ui.bootstrap']);

@State({
  name: 'home',
  url: '',
  abstract: true,
  resolve: {
    user: () => 'paul',
    role: () => 'admin'
  }
})

@Component('app')
@View('client/app.ng.html')
class App {
  aaa: "asd";
  constructor() {
    console.log("hello!")
  }
}

bootstrap(App);
