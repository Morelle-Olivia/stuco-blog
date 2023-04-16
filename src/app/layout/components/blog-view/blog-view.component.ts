import {Component, Input, OnInit} from '@angular/core';
import {Blog} from "../../../blog/models/blog.model";

@Component({
  selector: 'blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.scss']
})
export class BlogViewComponent implements OnInit {
 @Input() data?: Blog;

  constructor() { }

  ngOnInit(): void {
  }

}
