import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './core/components/home/home.component';
import {LayoutModule} from "./layout/layout.module";
import { HeroComponent } from './core/components/hero/hero.component';
import { MissionComponent } from './core/components/mission/mission.component';
import { AboutComponent } from './core/components/about/about.component';
import { ContactComponent } from './core/components/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeroComponent,
    MissionComponent,
    AboutComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
