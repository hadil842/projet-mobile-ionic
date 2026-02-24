import { Component, OnInit } from '@angular/core';
import { IonHeader,IonTitle, IonFooter, IonImg, IonToolbar, IonButton,} from "@ionic/angular/standalone";
import { NavbarComponent } from "src/app/navbar/navbar/navbar.component";

@Component({
  selector: 'app-graphics',
  templateUrl: './graphics.component.html',
  imports: [IonHeader,IonTitle, IonFooter, IonImg, IonToolbar, IonButton, NavbarComponent],
  styleUrls: ['./graphics.component.scss'],
})
export class GraphicsComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
