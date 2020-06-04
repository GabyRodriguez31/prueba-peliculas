import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { Prueba1SharedModule } from 'app/shared/shared.module';
import { Prueba1CoreModule } from 'app/core/core.module';
import { Prueba1AppRoutingModule } from './app-routing.module';
import { Prueba1HomeModule } from './home/home.module';
import { Prueba1EntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    Prueba1SharedModule,
    Prueba1CoreModule,
    Prueba1HomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    Prueba1EntityModule,
    Prueba1AppRoutingModule,
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [MainComponent],
})
export class Prueba1AppModule {}
