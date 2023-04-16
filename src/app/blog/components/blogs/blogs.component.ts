import { Component, OnInit } from '@angular/core';
import {Apollo, gql} from "apollo-angular";
import {Blog} from "../../models/blog.model";

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent implements OnInit {
  blogs?: Blog;

  constructor(private apollo: Apollo) { }

  ngOnInit(): void {
    this.apollo.watchQuery<any>({
      query: gql`
      query blogsSummary{
        blogs(where: {isAbout_not: true, isMission_not: true}) {
    id,
    title,
    summary,
    heroImage {
      url
    }
  }
      }
      `
    }).valueChanges.subscribe(data => {
      this.blogs = data?.data?.blogs;
    })
  }

}
