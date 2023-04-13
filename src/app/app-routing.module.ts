import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./core/components/home/home.component";
import {AboutComponent} from "./core/components/about/about.component";
import {ContactComponent} from "./core/components/contact/contact.component";

const routes: Routes = [
  {
    path: 'missions',
    loadChildren: () => import('./blog/blog.module').then(m=>m.BlogModule)
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: '**',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
