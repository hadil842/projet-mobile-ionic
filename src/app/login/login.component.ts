import { Component, OnInit } from '@angular/core';
import { IonHeader, IonContent, IonItem, IonInput, IonButton, IonIcon, IonFooter, IonToolbar } from "@ionic/angular/standalone";
import { HeaderComponent } from "../navbar/header/header.component";
import { NavbarComponent } from "../navbar/navbar/navbar.component";
import { addIcons } from 'ionicons';
import { logoApple, logoGoogle } from 'ionicons/icons';
import { NavController } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { Client } from '../service/client';
import { Freelancer } from '../service/freelancer';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports: [CommonModule,IonHeader, HeaderComponent, IonContent, IonItem, IonInput, IonButton, IonIcon, IonFooter, IonToolbar, NavbarComponent,FormsModule],
})
export class LoginComponent  implements OnInit {
   messageSucces:string="";

   prenomuser:string="";
   password:string="";

  constructor(private navCtrl: NavController,public client:Client,public freelancer:Freelancer) {
    addIcons({ logoGoogle, logoApple });
  }
  goToSignup() {
     this.navCtrl.navigateForward('signup1');
}
  ngOnInit() {}

  async loginclient():Promise<void>{
    let requete=JSON.stringify({prenom:this.prenomuser,password:this.password})
    if(await this.client.loginclient(requete)==1){this.messageSucces="Connexion avec Succes";}
    else this.messageSucces="Connexion non retablie";
  }

  async loginfreelancer():Promise<void>{
    let requete=JSON.stringify({prenom:this.prenomuser,password:this.password});
     if( await this.freelancer.loginfreelancer(requete)==1){this.messageSucces="Connexion avec Succes";}
    else this.messageSucces="Connexion non retablie";
  }
}
