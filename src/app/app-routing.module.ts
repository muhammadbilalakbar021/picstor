import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { FunFeaturesComponent } from './fun-features/fun-features.component';
import { PotraitModeEffectComponent } from './potrait-mode-effect/potrait-mode-effect.component';
import { ImprovedPictureQualityComponent } from './improved-picture-quality/improved-picture-quality.component'
import { FacialFeaturesEditingComponent} from './facial-features-editing/facial-features-editing.component'
const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'improved-picture-quality',
    component: ImprovedPictureQualityComponent
  },
  {
    path: 'potrait-mode-effect',
    component: PotraitModeEffectComponent
  },
  {
    path: 'facial-features-editing',
    component: FacialFeaturesEditingComponent
  },
  {
    path: 'fun-features',
    component: FunFeaturesComponent
  },
  {
    path: 'about-us',
    component: AboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
