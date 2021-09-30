import { Component } from '@angular/core';
import {
  ToastController,
  ActionSheetController,
  AlertController,
} from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  // New variable name value is Walid
  name = 'Walid';
  age = 25;
  counter = 0;
  warning = '';

  byeName = ''
  byeAge = 0

  constructor(
    public toastController: ToastController,
    public actionSheetController: ActionSheetController,
    public alertController: AlertController
  ) {}

  sayHello() {
    alert('Hello Walid');
  }
  addHandler() {
    let message = 'add';
    this.counter++;
  }
  resetHandler() {
    let message = 'reset';
    console.log(message);
    this.counter = 0;
  }
  async minusHandler() {
    let message = 'minus';
    if (this.counter > 0) {
      this.counter--;
    } else {
      //this.warning = 'YOu reach the minimum'
      const toast = await this.toastController.create({
        message: "You've reached the minimum value",
        duration: 2000,
      });
      toast.present();
    }
  }

  //  Action Sheet
  async showSheetHandler() {
    const actionSheet = await this.actionSheetController.create({
      header: 'albums',
      buttons: [
        {
          text: 'Delete',
          role: 'destructive',
          icon: 'trash',
          handler: () => {
            console.log('Delete clicked');
          },
        },
        {
          text: 'Share',
          icon: 'share',
          handler: () => {
            console.log('Share clicked');
          },
        },
        {
          text: 'Play (open modal)',
          icon: 'caret-forward-circle',
          handler: () => {
            console.log('Play clicked');
          },
        },
        {
          text: 'Favorite',
          icon: 'heart',
          handler: () => {
            console.log('Favorite clicked');
          },
        },
        {
          text: 'Cancel',
          icon: 'close',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          },
        },
      ],
    });
    await actionSheet.present();
    const { role } = await actionSheet.onDidDismiss();
  }

  // ALERT
  async showAlertHandler(){
    const show = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: ['OK']
    })
    await show.present()

    const {role} = await show.onDidDismiss()
  }

  sayGoodbye(){
    console.log(`Gopdbye ${this.byeName} and your ${this.byeAge}`)
  }


}
