import { Component, OnInit } from '@angular/core';
import { Size } from '../app.models';

@Component({
  selector: 'app-car-size',
  templateUrl: './car-size.page.html',
  styleUrls: ['./car-size.page.scss'],
})
export class CarSizePage implements OnInit {

  sizes = Array<Size>();

  constructor() { }

  ngOnInit() {
    this.sizes = [{
      "name": "small",
      "price": 1
    },
    {
      "name": "sedan",
      "price": 1.5
    },
    {
      "name": "minivan",
      "price": 1.75
    },
    {
      "name": "hatchback",
      "price": 2
    },
    {
      "name": "CUV",
      "price": 2.5
    },
    {
      "name": "Van",
      "price": 2.75
    },
    {
      "name": "Supercar",
      "price": 3
    },
    {
      "name": "Pickup Truck",
      "price": 3.5
    },
    {
      "name": "SUV",
      "price": 4
    }]
  }

}
