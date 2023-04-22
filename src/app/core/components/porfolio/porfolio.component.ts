import { Component, OnInit } from '@angular/core';
import {Apollo, gql} from "apollo-angular";
import {GalleryItem} from "../../../blog/models/gallery-item.model";
import {I18nService} from "../../../translate/translate/i18n.service";

@Component({
  selector: 'app-porfolio',
  templateUrl: './porfolio.component.html',
  styleUrls: ['./porfolio.component.scss']
})
export class PorfolioComponent implements OnInit {
  images?: GalleryItem[] = []
  preview?:any = null;
  locale = 'fr';

  constructor(
      private apollo: Apollo,
      private _i18n: I18nService
  ) { }

  ngOnInit(): void {
    this.locale = this._i18n.getCurrentLanguage().id;
    this.apollo.watchQuery<any>({
      query: gql`
      query portfolio{
        portfolios(locales: [${this.locale}]) {
    id,
    caption,
    image {
      url
    }}
      }
      `
    }).valueChanges.subscribe(data => {
      this.images = data?.data?.portfolios;
    })
  }

  showPreview(url: any) {
    this.preview = url;
  }
}
