import { Component, OnInit } from '@angular/core';
import { Size } from '../app.models';
import { InternalService } from '../internal.service';

@Component({
  selector: 'app-car-size',
  templateUrl: './car-size.page.html',
  styleUrls: ['./car-size.page.scss'],
})
export class CarSizePage implements OnInit {

  sizes = Array<Size>();
  selectedSize: Size;

  constructor(private internalService: InternalService) { }

  ngOnInit() {
    this.sizes = [{
      "name": "small",
      "price": 1,
      "selected": false,
      "svg": "small.svg"
    },
    {
      "name": "sedan",
      "price": 1.5,
      "selected": false,
      "svg": "sedan.svg"
    },
    {
      "name": "minivan",
      "price": 1.75,
      "selected": false,
      "svg": "minivan.svg"
    },
    {
      "name": "hatchback",
      "price": 2,
      "selected": false,
      "svg": "hatchback.svg"
    },
    {
      "name": "CUV",
      "price": 2.5,
      "selected": false,
      "svg": "cuv.svg"
    },
    {
      "name": "Van",
      "price": 2.75,
      "selected": false,
      "svg": "van.svg"
    },
    {
      "name": "Supercar",
      "price": 3,
      "selected": false,
      "svg": "supercar.svg"
    },
    {
      "name": "Pickup Truck",
      "price": 3.5,
      "selected": false,
      "svg": "pickup.svg"
    },
    {
      "name": "SUV",
      "price": 4,
      "selected": false,
      "svg": "suv.svg"
    }]
  }
  selectCarSize(item: Size){
    this.selectedSize = item;
    this.sizes.forEach(element => {
      if(element !== item){
        element.selected = false;
      } else {
        element.selected = true;
        this.selectedSize.selected = true;
      } 
    });
    this.internalService.selectedSize.next(this.selectedSize)
  }
  continue() {
  }
}
