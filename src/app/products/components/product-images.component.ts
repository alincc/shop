import { Component, OnInit, Input } from '@angular/core';
import { ProductImage } from '../product';

@Component({
  selector: 'app-product-images',
  template: `
    <div class="row">

      <div class="col-md-3 col-xs-3">

        <div *ngFor="let image of images" class="m-t m-b">

          <img
            [src]="image.url"
            alt="Image"
            class="thumb-xl cursor"
            (click)="changeImage(image)"
          />

        </div>

      </div>

      <div class="col-md-9 col-xs-9 center">

        <img [src]="activeImage.url" *ngIf="activeImage" class="large-image" alt="Large image"/>

      </div>

    </div>
  `,
  styles: [`
    .large-image {
      max-width: 95%;
    }
    .center {
      text-align: center;
    }
    .cursor {
      cursor: pointer;
    }
  `],
})
export class ProductImagesComponent implements OnInit {
  @Input() images: ProductImage[];
  masterImage: ProductImage;
  activeImage: ProductImage;

  constructor() {  }

  ngOnInit() {
    this.masterImage = this.getMasterImage(this.images);
    this.activeImage = this.masterImage;
  }

  getMasterImage(images: ProductImage[]): ProductImage {
    if (!images.length) {
      return null;
    }

    const masterImage = images.find(image => image.main);

    return masterImage ? masterImage : images[0];
  }

  changeImage(image: ProductImage): void {
    this.activeImage = image;
  }
}
