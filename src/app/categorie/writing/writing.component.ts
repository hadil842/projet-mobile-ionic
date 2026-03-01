import { Component, OnInit } from '@angular/core';
import { IonicModule } from "@ionic/angular";
import { IonHeader,IonTitle, IonFooter, IonImg, IonToolbar, IonButton, } from "@ionic/angular/standalone";
import { addIcons } from 'ionicons';
import { personCircleOutline } from 'ionicons/icons';
import { NavbarComponent } from "src/app/navbar/navbar/navbar.component";
import { HeaderComponent } from "src/app/navbar/header/header.component";

@Component({
  selector: 'app-writing',
  templateUrl: './writing.component.html',
  imports: [IonHeader, IonFooter,  IonToolbar,  NavbarComponent, HeaderComponent],
  styleUrls: ['./writing.component.scss'],
})
export class WritingComponent  implements OnInit {

  constructor() {
    addIcons({ personCircleOutline });
  }

  ngOnInit() {}

}
