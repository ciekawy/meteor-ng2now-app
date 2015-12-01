import {Component, View, SetModule, bootstrap} from 'angular2now';

SetModule('app', ['angular-meteor']);

@Component({
  selector: 'app'
})
@View({
  templateUrl: 'client/app.ng.html'
})
class App {
  aaa: "asd";
  constructor() {
    console.log("hello!")
  }
}

bootstrap(App);