import { Component} from '@angular/core';
import { IonButton, IonIcon } from '@ionic/angular/standalone';

import { addIcons } from 'ionicons';
import { home, } from 'ionicons/icons';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  imports: [IonIcon,IonButton],
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent{

  constructor() {

  }

}



