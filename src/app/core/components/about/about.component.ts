import {Component, OnInit} from '@angular/core';
import {Apollo, gql} from "apollo-angular";
import {Blog} from "../../../blog/models/blog.model";
import {I18nService} from "../../../translate/translate/i18n.service";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  blog?:Blog;
  locale = 'fr';

  constructor(
      private apollo: Apollo,
      private _i18n: I18nService
  ) { }

  ngOnInit(): void {
    this.locale = this._i18n.getCurrentLanguage().id;

    this.apollo.watchQuery<any>({
      fetchPolicy: 'no-cache',
      query: gql`
      {
        blogs(where: {isAbout: true}, first:1, locales:[${this.locale}]) {
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
