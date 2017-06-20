import { Component, OnInit } from '@angular/core';
import { Product } from '../model/interface';
import { ProductService } from '../services';
import { ProductComponent } from '../product/product.component';

@Component({
  selector: 'app-products-container',
  templateUrl: './products-container.component.html',
  styleUrls: ['./products-container.component.scss']
})
export class ProductsContainerComponent implements OnInit {
  errorMessage: string;
  products: Product[];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts(): void {
    this.productService.getProducts()
      .subscribe(
        products => this.products = products.map(product => new Product(product)),
        error => this.errorMessage = <any>error
      );
  }
}
