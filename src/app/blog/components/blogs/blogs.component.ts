import {Component, OnInit} from '@angular/core';
import {Apollo, gql} from "apollo-angular";
import {Blog} from "../../models/blog.model";
import {I18nService} from "../../../translate/translate/i18n.service";

@Component({
    selector: 'app-blogs',
    templateUrl: './blogs.component.html',
    styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent implements OnInit {
    blogs: any[] = [];
    locale = 'fr';

    constructor(private apollo: Apollo,
                private _i18n: I18nService) {
    }

    ngOnInit(): void {
        this.locale = this._i18n.getCurrentLanguage().id;
        this.apollo.watchQuery<any>({
            query: gql`
      query blogsSummary{
        blogs(where: {isAbout_not: true, isMission_not: true}, locales:[${this.locale}]) {
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
            this.blogs = data?.data?.blogs.map((blog: any) => {
                return {
                    id: blog.id,
                    title: blog.title,
                    content: blog.summary,
                    img: blog.heroImage?.url,
                    url: ['.', blog.id]
                }
            });
        })
    }

}
