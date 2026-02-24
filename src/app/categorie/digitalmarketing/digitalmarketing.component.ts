import { Component, OnInit } from '@angular/core';
import { IonHeader,IonTitle, IonFooter, IonImg, IonToolbar, IonButton,} from "@ionic/angular/standalone";

import { NavbarComponent } from "src/app/navbar/navbar/navbar.component";

@Component({
  selector: 'app-digitalmarketing',
  templateUrl: './digitalmarketing.component.html',
  styleUrls: ['./digitalmarketing.component.scss'],
   imports: [IonTitle, IonFooter, IonImg, IonToolbar, IonButton, IonHeader, NavbarComponent],
})
export class DigitalmarketingComponent{

  constructor() { }

}







