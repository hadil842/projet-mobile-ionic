import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ProgrammationComponent } from './categorie/programmation/programmation.component';
import { VideosComponent } from './categorie/videos/videos.component';
import { GraphicsComponent } from './categorie/graphics/graphics.component';
import { WritingComponent } from './categorie/writing/writing.component';
import { DigitalmarketingComponent } from './categorie/digitalmarketing/digitalmarketing.component';
import { AiserComponent } from './categorie/aiser/aiser.component';
import { AjoutoptionComponent } from './ajout/ajoutoption/ajoutoption.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'programmation',
    component:ProgrammationComponent,
  },{
    path: 'videos',
    component:VideosComponent,
  },{
    path: 'graphics',
    component:GraphicsComponent,
  },{
    path: 'writing',
    component:WritingComponent,
  },{
    path: 'digital',
    component:DigitalmarketingComponent,
  },{
    path: 'aiser',
    component:AiserComponent,
  },{
    path:'ajouter',
    component:AjoutoptionComponent,
  }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
