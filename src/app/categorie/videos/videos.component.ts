import { Component, OnInit } from '@angular/core';
import { IonHeader,IonTitle, IonFooter, IonImg, IonToolbar, IonButton, } from "@ionic/angular/standalone";
import { NavbarComponent } from "src/app/navbar/navbar/navbar.component";
import { HeaderComponent } from "src/app/navbar/header/header.component";

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  imports: [IonHeader, IonFooter, IonToolbar, NavbarComponent, HeaderComponent],
  styleUrls: ['./videos.component.scss'],
})
export class VideosComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
