import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

import { IonToolbar, IonImg, IonTitle, IonButton, IonButtons } from "@ionic/angular/standalone";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  imports: [IonButtons, IonButton, IonTitle, IonToolbar,IonButtons],
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent  implements OnInit {
  constructor(private navCtrl: NavController) {}
  goToLogin() {
       this.navCtrl.navigateForward('login');
  }
  ngOnInit() {}

}
