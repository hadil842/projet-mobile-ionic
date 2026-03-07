import { Component, OnInit } from '@angular/core';
import { IonToolbar, IonFooter, IonHeader, IonButton, IonContent, IonIcon, IonItem, IonInput, IonLabel, IonCheckbox, IonSelectOption, IonSelect, IonText, IonNote, IonCol, IonGrid, IonRow, IonChip, IonList } from "@ionic/angular/standalone";


import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from 'src/app/navbar/navbar/navbar.component';
import { HeaderComponent } from 'src/app/navbar/header/header.component';
import { Client } from 'src/app/service/client';

@Component({
  selector: 'app-signupclient',
  templateUrl: './signupclient.component.html',
  styleUrls: ['./signupclient.component.scss'],
  imports: [FormsModule,IonToolbar, IonFooter, NavbarComponent, HeaderComponent, IonHeader, IonContent, IonItem, IonInput, IonList,CommonModule],
})
export class SignupclientComponent {
   nomclient:string="";
   prenomclient:string="";
   email:string="";
   password:string="";
   passwordverif:string="";
   profession:string="";
   messageSucces:string="";
  constructor(public client:Client) {

  }


  async creercompte():Promise<void> {
      let data=JSON.stringify({nom:this.nomclient,prenom:this.prenomclient,email:this.email,password:this.password,profession:this.profession
      });
      if(await this.client.creerclient(data)==1 && this.password===this.passwordverif){
      this.client.setnameclient(this.nomclient);
      this.messageSucces = "Compte créé avec succès !";}
      else{
        this.messageSucces = "Compte non créé";
      }


  }


}
