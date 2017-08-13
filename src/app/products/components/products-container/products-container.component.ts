import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { Product } from '../../../model/interface';

@Component({
  selector: 'app-products-container',
  templateUrl: './products-container.component.html',
  styleUrls: ['./products-container.component.scss']
})
export class ProductsContainerComponent implements OnInit, OnChanges {
  @Input() products: Product[];
  @Output() addToCart = new EventEmitter<Product>();

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.products && changes.products.currentValue) {
      this.products = changes.products.currentValue.map(product => new Product(product));
    }
  }

}
