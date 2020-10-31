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
  subscription: Subscription = new Subscription();

  constructor(private internalService: InternalService) { }

  ngOnInit() {
    this.subscription.add(
      this.internalService.selectedServices.subscribe(item=>{
        //console.log(item)
      this.selectedServices = item;
    }));
    this.subscription.add(
      this.internalService.selectedSize.subscribe(item=>{
        console.log(item);
        this.selectedSize = item;
        console.log(this.selectedSize)
    }));
  }
  ionViewDidEnter(){
    
  }
}
