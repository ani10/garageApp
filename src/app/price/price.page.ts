import { Component, OnInit } from '@angular/core';
import { Service, Size } from '../app.models';

@Component({
  selector: 'app-price',
  templateUrl: './price.page.html',
  styleUrls: ['./price.page.scss'],
})
export class PricePage implements OnInit {

  selectedServices = Array<Service>();
  selectedSize: Size;

  constructor() { }

  ngOnInit() {
  }

}
