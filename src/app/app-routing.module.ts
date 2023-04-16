import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./core/components/home/home.component";
import {AboutComponent} from "./core/components/about/about.component";
import {ContactComponent} from "./core/components/contact/contact.component";
import {MissionComponent} from "./core/components/mission/mission.component";
import {PorfolioComponent} from "./core/components/porfolio/porfolio.component";

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
    path: 'missions',
    component: MissionComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'portfolio',
    component: PorfolioComponent
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
