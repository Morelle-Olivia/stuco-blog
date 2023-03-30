import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {BlogsComponent} from "./components/blogs/blogs.component";
import {BlogComponent} from "./components/blog/blog.component";

const routes: Routes = [
  {
    path: '',
    component: BlogsComponent
  },
  {
    path: ':id',
    component: BlogComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
