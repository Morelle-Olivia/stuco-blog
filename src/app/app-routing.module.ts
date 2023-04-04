import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./core/components/home/home.component";
import {AboutComponent} from "./core/components/about/about.component";

const routes: Routes = [
  {
    path: 'blog',
    loadChildren: () => import('./blog/blog.module').then(m=>m.BlogModule)
  },
  {
    path: 'about',
    component: AboutComponent
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
