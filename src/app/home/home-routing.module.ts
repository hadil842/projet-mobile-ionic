import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { NavbarComponent } from '../navbar/navbar/navbar.component';
import { ProgrammationComponent } from '../categorie/programmation/programmation.component';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path:'navbar',
    component:NavbarComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {
}
