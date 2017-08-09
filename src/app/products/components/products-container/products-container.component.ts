import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../../model/interface';

@Component({
  selector: 'app-products-container',
  templateUrl: './products-container.component.html',
  styleUrls: ['./products-container.component.scss']
})
export class ProductsContainerComponent implements OnInit {
  @Input() products: Product[];

  constructor() { }

  ngOnInit() {
  }
}
