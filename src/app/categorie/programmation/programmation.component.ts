import { Component, OnInit } from '@angular/core';
import { IonicModule } from "@ionic/angular";
import { IonHeader,IonTitle, IonFooter, IonImg, IonToolbar, IonButton } from "@ionic/angular/standalone";
import { NavbarComponent } from "src/app/navbar/navbar/navbar.component";

@Component({
  selector: 'app-programmation',
  templateUrl: './programmation.component.html',
  imports: [IonHeader,IonTitle, IonFooter, IonImg, IonToolbar, IonButton, NavbarComponent],
  styleUrls: ['./programmation.component.scss'],
})
export class ProgrammationComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
