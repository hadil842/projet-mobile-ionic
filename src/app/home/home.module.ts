import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { NavbarComponent } from "../navbar/navbar/navbar.component";
import { addIcons } from 'ionicons';
import { codeWorkingOutline, imageOutline, languageOutline, laptopOutline, phonePortraitOutline, searchCircleOutline, videocamOutline } from 'ionicons/icons';
import { HeaderComponent } from "../navbar/header/header.component";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    NavbarComponent,
    HeaderComponent
],
  declarations: [HomePage]
})
export class HomePageModule {
  constructor(){
  addIcons({searchCircleOutline,codeWorkingOutline,imageOutline,phonePortraitOutline,languageOutline,videocamOutline,laptopOutline})}
}
