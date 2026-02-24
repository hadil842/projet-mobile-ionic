import { Component, OnInit } from '@angular/core';
import { IonHeader, IonTitle, IonButton, IonImg, IonToolbar, IonFooter, IonContent } from "@ionic/angular/standalone";
import { NavbarComponent } from "src/app/navbar/navbar/navbar.component";

@Component({
  selector: 'app-ajoutoption',
  templateUrl: './ajoutoption.component.html',
  imports: [IonHeader, IonToolbar, IonTitle, IonButton, IonImg, IonFooter, NavbarComponent, IonContent],
  styleUrls: ['./ajoutoption.component.scss'],
})
export class AjoutoptionComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
