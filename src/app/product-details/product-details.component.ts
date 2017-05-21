import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';

import 'rxjs/add/operator/switchMap';

import { ProductService } from '../services/product.service';
import { CartService } from '../services/cart.service';
import { Product } from '../model/product';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  @Input() product: Product;

  constructor(
    private productService: ProductService,
    private cartService: CartService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.route.params
      .switchMap((params: Params) => this.productService.getProduct(+params['id']))
      .subscribe(product => this.product = product);
  }

  addToCart(): void {
    this.cartService.add(this.product);
  }

}
