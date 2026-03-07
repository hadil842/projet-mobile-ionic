import { Component, OnInit } from '@angular/core';
import { IonHeader, IonFooter, IonToolbar, IonContent, IonCard, IonButton, IonIcon, IonCardContent } from "@ionic/angular/standalone";

import { NavController } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from 'src/app/navbar/header/header.component';
import { NavbarComponent } from 'src/app/navbar/navbar/navbar.component';
@Component({
  selector: 'app-signup1',
  templateUrl: './signup1.component.html',
  styleUrls: ['./signup1.component.scss'],
  imports: [CommonModule,IonHeader, HeaderComponent, IonFooter, IonToolbar, NavbarComponent, IonContent, IonCard, IonIcon, IonCardContent],
})
export class Signup1Component  implements OnInit {

selectedOption: string | null = null;
constructor(private navCtrl: NavController) {}
  selectOption(option: string) {
    this.selectedOption = option;
    if (option === 'client') {
      this.navCtrl.navigateForward('signupclient');
    } else if (option === 'freelancer') {
      this.navCtrl.navigateForward('signupfreelancer');
    }
  }
  ngOnInit() {}

}
