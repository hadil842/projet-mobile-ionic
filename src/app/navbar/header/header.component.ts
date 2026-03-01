import { Component, OnInit } from '@angular/core';

import { IonToolbar, IonImg, IonTitle, IonButton, IonButtons } from "@ionic/angular/standalone";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  imports: [IonButtons, IonButton, IonTitle, IonImg, IonToolbar,IonButtons],
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
