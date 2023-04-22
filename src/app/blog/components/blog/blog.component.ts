import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Apollo, gql} from "apollo-angular";
import {Blog} from "../../models/blog.model";
import {I18nService} from "../../../translate/translate/i18n.service";

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  blog?:Blog;
  locale = 'fr';

  constructor(
      private activatedRoute: ActivatedRoute,
      private apollo: Apollo,
      private _i18n: I18nService
  ) { }

  ngOnInit(): void {
    this.locale = this._i18n.getCurrentLanguage().id;
    this.activatedRoute.paramMap.subscribe(map => {
      let id = map.get("id");


      this.apollo.watchQuery<any>({
        query: gql`
      query blog{
        blog(where: {id: "${id}"}, locales:[${this.locale}]) {
    id,
    title,
    createdAt,
    author {name},
    sections {
      id,
      heading,
      content,
      point
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
