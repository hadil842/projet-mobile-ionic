import { Component, OnInit } from '@angular/core';
import { IonHeader, IonContent, IonItem, IonInput, IonButton, IonIcon, IonFooter, IonToolbar } from "@ionic/angular/standalone";
import { HeaderComponent } from "../navbar/header/header.component";
import { NavbarComponent } from "../navbar/navbar/navbar.component";
import { addIcons } from 'ionicons';
import { logoApple, logoGoogle } from 'ionicons/icons';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports: [IonHeader, HeaderComponent, IonContent, IonItem, IonInput, IonButton, IonIcon, IonFooter, IonToolbar, NavbarComponent],
})
export class LoginComponent  implements OnInit {


  constructor(private navCtrl: NavController) {
    addIcons({ logoGoogle, logoApple });
  }
  goToSignup() {
     this.navCtrl.navigateForward('signup1');
}
  ngOnInit() {}

}
