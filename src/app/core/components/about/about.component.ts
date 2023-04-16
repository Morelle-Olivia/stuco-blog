import {Component, OnInit} from '@angular/core';
import {Apollo, gql} from "apollo-angular";
import {Blog} from "../../../blog/models/blog.model";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  blog?:Blog;

  constructor(
      private apollo: Apollo
  ) { }

  ngOnInit(): void {
    this.apollo.watchQuery<any>({
      fetchPolicy: 'no-cache',
      query: gql`
      {
        blogs(where: {isAbout: true}, first:1) {
        id,
        title,
        sections {
          id,
          heading,
          content
        },
        heroImage {
            url
        }
        }
      }
      `
    }).valueChanges.subscribe(data => {
      this.blog = <Blog>(data?.data?.blogs[0]);
    })
  }

}
