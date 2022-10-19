import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css'],
})
export class FirstComponentComponent implements OnInit {
  name: String = 'Iran';
  idade: Number = 30;
  job: String = 'Ator';
  hobbies = ['Jogar', 'praticar esporte', 'ouvir musica'];
  car = {
    name: 'hb20',
    color: 'Black',
    Year: 2015,
  };

  constructor() {}

  ngOnInit(): void {}
}
