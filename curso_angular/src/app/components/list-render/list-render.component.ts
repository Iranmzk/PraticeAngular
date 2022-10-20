import { Component, OnInit } from '@angular/core';
import { Animal } from 'src/app/Animal';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css'],
})
export class ListRenderComponent implements OnInit {
  animals: Animal[] = [
    { name: 'Boca', type: 'Cat', age: 10 },
    { name: 'Catita', type: 'Cat', age: 7 },
    { name: 'Bb', type: 'Cat', age: 10 },
    { name: 'Coisinha', type: 'Cat', age: 6 },
    { name: 'Pinta', type: 'Dog', age: 20 },
    { name: 'Spirit', type: 'Horse', age: 25 },
  ];

  animal: Animal = { name: 'Luisa', type: 'Human', age: 23 };

  animalDetails = '';

  constructor() {}

  ngOnInit(): void {}

  showAge(animal: Animal) {
    this.animalDetails = 'Pet ' + animal.name + ' tem ' + animal.age + ' anos!';
  }
}
