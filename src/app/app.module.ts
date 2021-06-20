import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AboutComponent } from './about/about.component';
import { FunFeaturesComponent } from './fun-features/fun-features.component';
import { PotraitModeEffectComponent } from './potrait-mode-effect/potrait-mode-effect.component';
import { ImprovedPictureQualityComponent } from './improved-picture-quality/improved-picture-quality.component';
import { FacialFeaturesEditingComponent } from './facial-features-editing/facial-features-editing.component'
import { NgxFileDropModule } from 'ngx-file-drop';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { ModalModule, BsModalService } from 'ngx-bootstrap/modal';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    FunFeaturesComponent,
    PotraitModeEffectComponent,
    ImprovedPictureQualityComponent,
    FacialFeaturesEditingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    SlickCarouselModule,
    NgxFileDropModule,
    DragDropModule,
    HttpClientModule,
    ModalModule.forRoot(),
     

  ],
  providers: [BsModalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
