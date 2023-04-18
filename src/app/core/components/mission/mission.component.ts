import {Component, OnInit} from '@angular/core';

import {Apollo, gql} from 'apollo-angular';

@Component({
    selector: 'app-mission',
    templateUrl: './mission.component.html',
    styleUrls: ['./mission.component.scss']
})
export class MissionComponent implements OnInit {

    missions: any[] = []

    constructor(
        private apollo: Apollo
    ) {
    }

    ngOnInit(): void {
        this.apollo.watchQuery<any>({
            query: gql`
      {
        blogs(where: {isMission: true}) {
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
