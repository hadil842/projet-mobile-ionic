import { Component, OnInit } from '@angular/core';
import { IonToolbar, IonFooter, IonHeader, IonButton, IonContent, IonIcon, IonItem, IonInput, IonLabel, IonCheckbox, IonSelectOption, IonSelect, IonText, IonNote, IonCol, IonGrid, IonRow, IonChip, IonList } from "@ionic/angular/standalone";

import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from 'src/app/navbar/navbar/navbar.component';
import { HeaderComponent } from 'src/app/navbar/header/header.component';
import { Freelancer } from 'src/app/service/freelancer';

@Component({
  selector: 'app-signupfreelancer',
  templateUrl: './signupfreelancer.component.html',
  styleUrls: ['./signupfreelancer.component.scss'],
  imports: [CommonModule,FormsModule,IonToolbar, IonFooter, NavbarComponent, HeaderComponent, IonHeader, IonContent, IonItem, IonInput, IonList],
})
export class SignupfreelancerComponent {
   nomfreel:string="";
   prenomfreel:string="";
   emailfreel:string="";
   password:string="";
   passwordverif:string="";
   professionfreel:string="";
   bio:string="";
   cv:string="";
   portfolio:string="";
   competance:string="";
   messageSucces:string="";
  constructor(public freelancer:Freelancer) { }

  async creercompte():Promise<void> {
      let data=JSON.stringify({nom:this.nomfreel,prenom:this.prenomfreel,email:this.emailfreel,password:this.password,
        profession:this.professionfreel,bio:this.bio,cv:this.cv,portfolio:this.portfolio,competance:this.competance
      });
      if(await this.freelancer.creerfreelancer(data)==1 && this.password===this.passwordverif){
      this.freelancer.setnamefreelancer(this.nomfreel);
      this.messageSucces = "Compte créé avec succès !";}
      else {
        this.messageSucces = "Compte non créé";
      }


  }

}
