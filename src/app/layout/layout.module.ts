import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';

const components = [
  NavBarComponent
]

@NgModule({
  declarations: [
    components
  ],
  exports: [
      components
  ],
  imports: [
    CommonModule
  ]
})
export class LayoutModule { }
