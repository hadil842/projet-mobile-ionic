import { Component, OnInit } from '@angular/core';
import { IonHeader,IonTitle, IonFooter, IonImg, IonToolbar, IonButton,} from "@ionic/angular/standalone";

import { NavbarComponent } from "src/app/navbar/navbar/navbar.component";
import { HeaderComponent } from "src/app/navbar/header/header.component";

@Component({
  selector: 'app-digitalmarketing',
  templateUrl: './digitalmarketing.component.html',
  styleUrls: ['./digitalmarketing.component.scss'],
   imports: [IonFooter,IonToolbar,IonHeader, NavbarComponent, HeaderComponent],
})
export class DigitalmarketingComponent{

  constructor() { }

}







