import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  constructor(private navCtrl: NavController) {}
  gotoprogrammation():void{
      this.navCtrl.navigateForward('programmation');
   }
   gotoaiser() {
      this.navCtrl.navigateForward('aiser');
}
    gotovideos() {
    this.navCtrl.navigateForward('videos')
    }
    gotowriting() {
     this.navCtrl.navigateForward('writing');
}
    gotodigital() {
     this.navCtrl.navigateForward('digital');
}
    gotograhics() {
      this.navCtrl.navigateForward('graphics');
    }
}
