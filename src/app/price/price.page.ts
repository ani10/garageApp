import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Service, Size } from '../app.models';
import { InternalService } from '../internal.service';

@Component({
  selector: 'app-price',
  templateUrl: './price.page.html',
  styleUrls: ['./price.page.scss'],
})
export class PricePage implements OnInit {

  selectedServices = Array<Service>();
  selectedSize: Size;
  price: number = 0;
  subscription: Subscription = new Subscription();

  constructor(private internalService: InternalService) { }

  ngOnInit() {
    this.subscription.add(
      this.internalService.selectedServices.subscribe(item=>{
      this.selectedServices = item;
    }));
    this.subscription.add(
      this.internalService.selectedSize.subscribe(item=>{
        this.selectedSize = item;
    }));
  }
  ionViewWillEnter(){
    this.selectedServices.map(item=>{
      let serviceCost: number = item.price;
      let multiplyingFactor: number = this.selectedSize.price;
      this.price += serviceCost * multiplyingFactor
    })
  }
  ionViewDidLeave(){
    this.price = 0;
  }

}
