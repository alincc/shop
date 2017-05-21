import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../model/product'
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() product: Product;

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit() {
  }

  addToCart(): void {
    this.cartService.add(this.product);
  }

}
