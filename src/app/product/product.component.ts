import { Component, OnInit, Input } from '@angular/core';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

import { Product } from '../model/interface';
import { CartService } from '../services';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() product: Product;

  constructor(
    private cartService: CartService,
    public toastr: ToastsManager,
  ) { }

  ngOnInit() {
  }

  addToCart(): void {
    this.toastr.success('The product was added to your cart', 'Added');
    this.cartService.add(this.product);
  }
}
