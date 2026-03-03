import { Component, OnInit } from '@angular/core';
import { IonToolbar, IonFooter, IonHeader, IonButton, IonContent, IonIcon, IonItem, IonInput, IonLabel, IonCheckbox, IonSelectOption, IonSelect, IonText, IonNote, IonCol, IonGrid, IonRow, IonChip, IonList } from "@ionic/angular/standalone";
import { NavbarComponent } from "../navbar/navbar/navbar.component";
import { HeaderComponent } from "../navbar/header/header.component";


@Component({
  selector: 'app-signupclient',
  templateUrl: './signupclient.component.html',
  styleUrls: ['./signupclient.component.scss'],
  imports: [IonToolbar, IonFooter, NavbarComponent, HeaderComponent, IonHeader, IonContent, IonItem, IonInput, IonList],
})
export class SignupclientComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
