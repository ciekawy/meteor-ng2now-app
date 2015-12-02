import {Inject, View, Component, State} from "angular2now"

//SetModule('app')

@State({ name: 'home.two', url: '/two', defaultRoute: true })

@Component('element-two')
@View('client/element-two/element-two.ng.html')
@Inject( ['app'] )

class ElementTwo {
  cde: number;
  constructor (app) {
    this.cde = 3450;
    console.debug("app: ", app)
  }
}