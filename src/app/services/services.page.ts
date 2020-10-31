import { Component, OnInit } from '@angular/core';
import { Service } from '../app.models';
import { InternalService } from '../internal.service';
import { take } from "rxjs/operators";

@Component({
  selector: 'app-services',
  templateUrl: './services.page.html',
  styleUrls: ['./services.page.scss'],
})
export class ServicesPage implements OnInit {

  services = Array<Service>();
  selectedServices = Array<Service>();
  constructor(private internalService: InternalService) { }

  ngOnInit() {
    this.services = [
      {
          "id": "001",
          "service": "Car Wash",
          "svg": "../../assets/services-icons/car-wash.svg",
          "price": 1200.00,
          "selected": false
      },{
          "id": "002",
          "service": "Car Wash",
          "svg": "../../assets/services-icons/car-wash.svg",
          "price": 1200.00,
          "selected": false
      },{
          "id": "003",
          "service": "Car Wash",
          "svg": "../../assets/services-icons/car-wash.svg",
          "price": 1200.00,
          "selected": false
      },{
          "id": "004",
          "service": "Car Wash",
          "svg": "../../assets/services-icons/car-wash.svg",
          "price": 1200.00,
          "selected": false
      },{
          "id": "005",
          "service": "Car Wash",
          "svg": "../../assets/services-icons/car-wash.svg",
          "price": 1200.00,
          "selected": false
      },{
          "id": "006",
          "service": "Car Wash",
          "svg": "../../assets/services-icons/car-wash.svg",
          "price": 1200.00,
          "selected": false
      },{
          "id": "007",
          "service": "Puncture",
          "svg": "../../assets/services-icons/car-wash.svg",
          "price": 1200.00,
          "selected": false
      },{
          "id": "008",
          "service": "Engine Repair",
          "svg": "../../assets/services-icons/car-wash.svg",
          "price": 1200.00,
          "selected": false
      },{
          "id": "009",
          "service": "General Servics",
          "svg": "../../assets/services-icons/car-wash.svg",
          "price": 1200.00,
          "selected": false
      }
    ]
  }

  toggleSelectItem(item: Service){
    item.selected = !item.selected;
    if(item.selected) {
        this.selectedServices.push(item);
    } else {
        let index = this.selectedServices.indexOf(item);
        this.selectedServices.splice(index, 1);
    }
    this.internalService.selectedServices.next(this.selectedServices);
  }
  continue(){
  }
}
