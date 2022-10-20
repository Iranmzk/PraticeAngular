import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent implements OnInit {
  show: boolean = false;

  products = [
    {
      name: 'Playstation 5',
      price: 4350.0,
      description: 'Console',
    },
    {
      name: 'Dual Sense',
      price: 399.99,
      description: 'Console controller',
    },
    {
      name: 'Overwatch 2 - Playstation',
      price: 'Free',
      status: 'Playstation game, free to play',
    },
  ];

  testes(): void {
    this.show = !this.show;
  }

  constructor() {}

  ngOnInit(): void {}
}
