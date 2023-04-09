import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import {RouterModule} from "@angular/router";

const components = [
  NavBarComponent,
  FooterComponent
]

@NgModule({
  declarations: [
    components
  ],
  exports: [
      components
  ],
  imports: [
    CommonModule,
      RouterModule
  ]
})
export class LayoutModule { }
