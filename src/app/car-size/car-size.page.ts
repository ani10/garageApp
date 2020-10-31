import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car-size',
  templateUrl: './car-size.page.html',
  styleUrls: ['./car-size.page.scss'],
})
export class CarSizePage implements OnInit {

  sizes = [];

  constructor() { }

  ngOnInit() {
  }

}
