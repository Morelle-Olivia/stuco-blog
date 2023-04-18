import { Component, OnInit } from '@angular/core';
import {Apollo, gql} from "apollo-angular";
import {GalleryItem} from "../../../blog/models/gallery-item.model";

@Component({
  selector: 'app-porfolio',
  templateUrl: './porfolio.component.html',
  styleUrls: ['./porfolio.component.scss']
})
export class PorfolioComponent implements OnInit {
  images?: GalleryItem[] = []
  preview?:any = null;

  constructor(
      private apollo: Apollo
  ) { }

  ngOnInit(): void {
    this.apollo.watchQuery<any>({
      query: gql`
      query portfolio{
        portfolios {
    id,
    caption,
    image {
      url
    }}
      }
      `
    }).valueChanges.subscribe(data => {
      this.images = data?.data?.portfolios;
      console.log(this.images)
    })
  }

  showPreview(url: any) {
    this.preview = url;
  }
}
