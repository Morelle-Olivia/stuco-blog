import {Component, OnInit} from '@angular/core';

import {Apollo, gql} from 'apollo-angular';
import {Blog} from "../../../blog/models/blog.model";

@Component({
    selector: 'app-mission',
    templateUrl: './mission.component.html',
    styleUrls: ['./mission.component.scss']
})
export class MissionComponent implements OnInit {

    missions?: Blog

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
            this.missions = data?.data?.blogs;
        })
    }

}
