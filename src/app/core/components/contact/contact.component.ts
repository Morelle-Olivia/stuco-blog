import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contacts: any[] = [
    {
      name: 'Ngouleu Tertulien',
      address: 'Locality of Buea',
      email: 'ngouleutert1@gmail.com',
      avatar: '',
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
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
