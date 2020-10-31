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
      "selected": false
    },
    {
      "name": "sedan",
      "price": 1.5,
      "selected": false
    },
    {
      "name": "minivan",
      "price": 1.75,
      "selected": false
    },
    {
      "name": "hatchback",
      "price": 2,
      "selected": false
    },
    {
      "name": "CUV",
      "price": 2.5,
      "selected": false
    },
    {
      "name": "Van",
      "price": 2.75,
      "selected": false
    },
    {
      "name": "Supercar",
      "price": 3,
      "selected": false
    },
    {
      "name": "Pickup Truck",
      "price": 3.5,
      "selected": false
    },
    {
      "name": "SUV",
      "price": 4,
      "selected": false
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
