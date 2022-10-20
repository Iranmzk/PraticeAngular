import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent implements OnInit {
  show: boolean = false;

  testes(): void {
    this.show = !this.show;
  }

  constructor() {}

  ngOnInit(): void {}
}
