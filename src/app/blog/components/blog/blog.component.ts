import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Apollo, gql} from "apollo-angular";
import {Blog} from "../../models/blog.model";

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  blog?:Blog;

  constructor(
      private activatedRoute: ActivatedRoute,
      private apollo: Apollo
  ) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(map => {
      let id = map.get("id");


      this.apollo.watchQuery<any>({
        query: gql`
      query blog{
        blog(where: {id: "${id}"}) {
    id,
    title,
    sections {
      id,
      heading,
      content,
    },
    heroImage {
      url
    }
  }
      }
      `
      }).valueChanges.subscribe(data => {
        this.blog = data?.data?.blog;
      })
    })
  }

}
