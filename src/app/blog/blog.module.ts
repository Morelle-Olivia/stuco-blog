import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogRoutingModule } from './blog-routing.module';
import { BlogsComponent } from './components/blogs/blogs.component';
import { BlogComponent } from './components/blog/blog.component';
import {LayoutModule} from "../layout/layout.module";



@NgModule({
  declarations: [
    BlogsComponent,
    BlogComponent
  ],
    imports: [
        CommonModule,
        BlogRoutingModule,
        LayoutModule
    ]
})
export class BlogModule { }
