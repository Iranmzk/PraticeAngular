import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css'],
})
export class PipesComponent implements OnInit {
  sometext = 'TESTANDO O PIPE OPERATOR';
  today = new Date();
  time = new Date();
  today2: string = '' ;

  constructor() {}

  ngOnInit(): void {}
}
