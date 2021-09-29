import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';

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

  constructor(
    public toastController: ToastController,

    ) {}

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
  async minusHandler(){
    let message = 'minus'
    if (this.counter > 0){
      this.counter--
    }
    else{
      //this.warning = 'YOu reach the minimum'
      const toast = await this.toastController.create({
        message: 'You\'ve reached the minimum value',
        duration: 2000
      });
      toast.present();
    }
  }

}
