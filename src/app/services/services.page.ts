import { Component, OnInit } from '@angular/core';
import { Service } from '../app.models';

@Component({
  selector: 'app-services',
  templateUrl: './services.page.html',
  styleUrls: ['./services.page.scss'],
})
export class ServicesPage implements OnInit {

  services = Array<Service>();
  selectedServices = Array<Service>();
  constructor() { }

  ngOnInit() {
    this.services = [
      {
          "id": "001",
          "service": "Car Wash",
          "svg": "../../assets/services-icons/car-wash.svg",
          "price": 1200.00
      },{
          "id": "002",
          "service": "Car Wash",
          "svg": "../../assets/services-icons/car-wash.svg",
          "price": 1200.00
      },{
          "id": "003",
          "service": "Car Wash",
          "svg": "../../assets/services-icons/car-wash.svg",
          "price": 1200.00
      },{
          "id": "004",
          "service": "Car Wash",
          "svg": "../../assets/services-icons/car-wash.svg",
          "price": 1200.00
      },{
          "id": "005",
          "service": "Car Wash",
          "svg": "../../assets/services-icons/car-wash.svg",
          "price": 1200.00
      },{
          "id": "006",
          "service": "Car Wash",
          "svg": "../../assets/services-icons/car-wash.svg",
          "price": 1200.00
      },{
          "id": "007",
          "service": "Puncture",
          "svg": "../../assets/services-icons/car-wash.svg",
          "price": 1200.00
      },{
          "id": "008",
          "service": "Engine Repair",
          "svg": "../../assets/services-icons/car-wash.svg",
          "price": 1200.00
      },{
          "id": "009",
          "service": "General Servics",
          "svg": "../../assets/services-icons/car-wash.svg",
          "price": 1200.00
      }
  ]
  }

}
