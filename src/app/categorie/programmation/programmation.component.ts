import { Component, OnInit } from '@angular/core';
import { IonicModule } from "@ionic/angular";
import { IonHeader,IonTitle, IonFooter, IonImg, IonToolbar, IonButton } from "@ionic/angular/standalone";
import { NavbarComponent } from "src/app/navbar/navbar/navbar.component";
import { HeaderComponent } from "src/app/navbar/header/header.component";

@Component({
  selector: 'app-programmation',
  templateUrl: './programmation.component.html',
  imports: [IonHeader,IonFooter, IonToolbar, NavbarComponent, HeaderComponent],
  styleUrls: ['./programmation.component.scss'],
})
export class ProgrammationComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
