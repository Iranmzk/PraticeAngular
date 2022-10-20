import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Product';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent implements OnInit {
  show: boolean = false;

  product: Product[] = [
    {
      name: 'Playstation 5',
      price: 4350.0,
      description: 'Console',
      departament: 'Eletronic',
    },
    {
      name: 'DualSense',
      price: 399.99,
      description: 'Console controller',
      departament: 'Eletronic',
    },
    {
      name: 'Overwatch 2 - Playstation',
      price: 0.0,
      description: 'Playstation game, free to play',
      departament: 'Eletronic',
    },
  ];

  priceDetails = '';

  testes(): void {
    this.show = !this.show;
  }

  constructor() {}

  ngOnInit(): void {}

  showPrice(product: Product) {
    this.priceDetails = 'O valor do ' + product.name + ' é de R$ ' + product.price;
  }
}
