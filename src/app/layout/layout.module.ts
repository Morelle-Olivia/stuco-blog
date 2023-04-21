import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import {RouterModule} from "@angular/router";
import {BtnParticipateComponent} from "./components/btn-participate/btn-participate.component";
import { BlogViewComponent } from './components/blog-view/blog-view.component';
import { CardsViewComponent } from './components/cards-view/cards-view.component';
import {TranslateModule} from "../translate/translate.module";

const components = [
  NavBarComponent,
  FooterComponent,
    BtnParticipateComponent,
  BlogViewComponent,
  CardsViewComponent
]

@NgModule({
  declarations: [
    components,

  ],
  exports: [
      components
  ],
  imports: [
    CommonModule,
      RouterModule,
      TranslateModule
  ]
})
export class LayoutModule { }
