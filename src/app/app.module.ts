import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './core/components/home/home.component';
import {LayoutModule} from "./layout/layout.module";
import {HeroComponent} from './core/components/hero/hero.component';
import {MissionComponent} from './core/components/mission/mission.component';
import {AboutComponent} from './core/components/about/about.component';
import {ContactComponent} from './core/components/contact/contact.component';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { PorfolioComponent } from './core/components/porfolio/porfolio.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        HeroComponent,
        MissionComponent,
        AboutComponent,
        ContactComponent,
        PorfolioComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        LayoutModule,
        GraphQLModule,
        HttpClientModule
    ],
    providers: [],
    exports: [
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
