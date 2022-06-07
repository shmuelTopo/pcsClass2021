import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../products';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent  {
  @Input() product: Product = {id: 0, name: '', price: 0, description: ''};
  @Output() notify = new EventEmitter();
}