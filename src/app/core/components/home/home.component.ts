import { Component, OnInit } from '@angular/core';
import {Apollo, gql} from "apollo-angular";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  stats: any;

  constructor(
      private _apollo: Apollo
  ) { }

  ngOnInit(): void {
    this._apollo.watchQuery<any>({
      query: gql`
      query statistics{
        statistics {
          conquerors,
          evangelized,
          followed
        }
        }
      `
    }).valueChanges.subscribe(data => {
      this.stats = data?.data?.statistics[0];
    })
  }

}
