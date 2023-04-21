import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  readonly contacts: any[] = [
    {
      name: 'Ngouleu Tertulien',
      address: 'Locality of Buea',
      email: 'ngouleutert1@gmail.com',
      avatar: null,
      phones: [
        {
          phone: '(+237) 672 243 165',
          url: 'https://wa.me/237672243165'
        },
        {
          phone: '(+237) 693 693 887',
          url: 'tel://237693693887'
        }
      ]
    },
    {
      name: 'Phil Baruch Wafo',
      address: 'Dschang',
      email: null,
      avatar: null,
      phones: [
        {
          phone: '(+237) 698 649 126',
          url: 'https://wa.me/237698649126'
        }
      ]
    },
    {
      name: 'Eldad Ghue-Nzen',
      address: 'Yaounde',
      email: null,
      avatar: null,
      phones: [
        {
          phone: '(+237) 699 134 175',
          url: 'https://wa.me/237699134175'
        }
      ]
    },
    {
      name: 'Olivier Wounabaïsa',
      address: 'Meiganga',
      email: null,
      avatar: null,
      phones: [
        {
          phone: '(+237) 698 298 010',
          url: 'https://wa.me/237698298010'
        }
      ]
    },
    {
      name: 'Olivier Wounabaïsa',
      address: 'Meiganga',
      email: null,
      avatar: '',
      phones: [
        {
          phone: '(+237) 698 298 010',
          url: 'https://wa.me/237698298010'
        }
      ]
    },
    {
      name: 'Henriette Flore Djom Nack',
      address: 'Kaelé',
      email: null,
      avatar: null,
      phones: [
        {
          phone: '(+237) 695 291 224',
          url: 'https://wa.me/237695291224'
        }
      ]
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
