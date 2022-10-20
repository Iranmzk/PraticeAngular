import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css'],
})
export class ListRenderComponent implements OnInit {
  animals = [
    { name: 'Boca', type: 'Cat' },
    { name: 'Catita', type: 'Cat' },
    { name: 'Bb', type: 'Cat' },
    { name: 'Coisinha', type: 'Cat' },
    { name: 'Pinta', type: 'Dog' },
    { name: 'Spirit', type: 'Horse' },
  ];

  animal = { name: 'Luisa', type: 'Human' };

  constructor() {}

  ngOnInit(): void {}
}
