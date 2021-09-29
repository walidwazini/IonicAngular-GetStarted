import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  // New variable name value is Walid
  name = 'Walid'
  age = 25
  counter = 0
  warning = ''

  constructor() {}

  sayHello(){
    alert('Hello Walid')
  }
  addHandler(){
    let message = 'add'
    this.counter++
  }
  resetHandler(){
    let message = 'reset'
    console.log(message)
    this.counter = 0
  }
  minusHandler(){
    let message = 'minus'
    if (this.counter > 0){
      this.counter--
    }
    else{
      this.warning = 'YOu reach the minimum'
    }
  }

}
