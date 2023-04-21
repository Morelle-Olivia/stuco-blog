import {Component, OnInit} from '@angular/core';

import {Apollo, gql} from 'apollo-angular';
import {I18nService} from "../../../translate/translate/i18n.service";

@Component({
    selector: 'app-mission',
    templateUrl: './mission.component.html',
    styleUrls: ['./mission.component.scss']
})
export class MissionComponent implements OnInit {

    missions: any[] = [];
    locale = 'fr';

    constructor(
        private apollo: Apollo,
        private _i18n: I18nService
    ) {
    }

    ngOnInit(): void {
        this.locale = this._i18n.getCurrentLanguage().id;
        this.apollo.watchQuery<any>({
            query: gql`
      {
        blogs(where: {isMission: true}, locales:[${this.locale}) {
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
            this.missions = data?.data?.blogs.map((blog: any) => {
                return {
                    img: blog.heroImage.url,
                    content: blog.summary,
                    title: blog.title,
                    id: blog.id,
                    url: ['..', 'blog', blog.id]
                }
            });
        })
    }

}
