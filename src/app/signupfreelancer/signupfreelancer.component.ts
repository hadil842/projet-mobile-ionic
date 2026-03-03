import { Component, OnInit } from '@angular/core';
import { IonToolbar, IonFooter, IonHeader, IonButton, IonContent, IonIcon, IonItem, IonInput, IonLabel, IonCheckbox, IonSelectOption, IonSelect, IonText, IonNote, IonCol, IonGrid, IonRow, IonChip, IonList } from "@ionic/angular/standalone";
import { NavbarComponent } from "../navbar/navbar/navbar.component";
import { HeaderComponent } from "../navbar/header/header.component";

@Component({
  selector: 'app-signupfreelancer',
  templateUrl: './signupfreelancer.component.html',
  styleUrls: ['./signupfreelancer.component.scss'],
  imports: [IonToolbar, IonFooter, NavbarComponent, HeaderComponent, IonHeader, IonContent, IonItem, IonInput, IonList],
})
export class SignupfreelancerComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
