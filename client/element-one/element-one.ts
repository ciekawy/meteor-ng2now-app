import {SetModule, Inject, View, Component, State} from "angular2now"

@State({ name: 'home.one', url: '/one' })

@Component({selector: 'element-one'})
@View({ templateUrl: 'element-one.ng.html' })
@Inject( ['app'] )

class ElementOne {
  abc: number;
  constructor (app) {
    this.abc = 123;
    console.debug("app: ", app)
  }
}