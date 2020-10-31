import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Service, Size } from './app.models';

@Injectable({
  providedIn: 'root'
})
export class InternalService {
  selectedServices = new BehaviorSubject<Array<Service>>([]);
  selectedSize = new BehaviorSubject<Size>({
    "name": '',
    "price": null,
    "selected": null
  });
  constructor() { }
  
  ngOnInit() {

  }
}
