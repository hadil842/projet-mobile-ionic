import { Component, OnInit } from '@angular/core';
import { IonHeader,IonTitle, IonFooter, IonImg, IonToolbar, IonButton, } from "@ionic/angular/standalone";
import { NavbarComponent } from "src/app/navbar/navbar/navbar.component";

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  imports: [IonHeader,IonTitle, IonFooter, IonImg, IonToolbar, IonButton, NavbarComponent],
  styleUrls: ['./videos.component.scss'],
})
export class VideosComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
