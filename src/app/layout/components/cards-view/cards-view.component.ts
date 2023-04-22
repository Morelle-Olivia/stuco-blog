import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'cards-view',
  templateUrl: './cards-view.component.html',
  styleUrls: ['./cards-view.component.scss']
})
export class CardsViewComponent implements OnInit {
  @Input() cards:any[] = []

  constructor() { }

  ngOnInit(): void {
  }

}
