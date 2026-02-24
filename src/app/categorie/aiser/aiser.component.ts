import { Component, OnInit } from '@angular/core';

import { IonButton, IonIcon, IonHeader, IonToolbar, IonImg, IonFooter, IonTitle } from '@ionic/angular/standalone';
import { NavbarComponent } from "src/app/navbar/navbar/navbar.component";


@Component({
  selector: 'app-aiser',
  templateUrl: './aiser.component.html',

  styleUrls: ['./aiser.component.scss'],
    imports: [IonTitle, IonFooter, IonImg, IonToolbar, IonButton, IonHeader, NavbarComponent],

})
export class AiserComponent {

  constructor() { }


}





