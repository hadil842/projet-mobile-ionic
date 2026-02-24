import { Component} from '@angular/core';
import { NavController } from '@ionic/angular';
import { IonButton, IonIcon } from '@ionic/angular/standalone';

import { addIcons } from 'ionicons';
import { add, addOutline, home, person, personCircleOutline, searchCircleOutline, } from 'ionicons/icons';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  imports: [IonIcon,IonButton],
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent{

  constructor(private nav:NavController) {
       addIcons({home,searchCircleOutline,personCircleOutline,addOutline})

  }
  gotohome() {
     this.nav.navigateForward('home');
}
goajouter() {
     this.nav.navigateForward('ajouter');
}

}



