import {Inject, View, Component, State} from "angular2now"

//SetModule('app');

@State({ name: 'home.one', url: '/one' })

@Component('element-one')
@View('client/element-one/element-one.ng.html')
@Inject( ['app'] )

class ElementOne {
  abc: number;
  constructor (app) {
    this.abc = 123;
    console.debug("app: ", app)
  }
}