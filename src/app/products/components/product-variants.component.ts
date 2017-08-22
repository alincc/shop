import { Component, OnInit, Input, Output, EventEmitter, AfterViewInit } from '@angular/core';
import * as _ from 'lodash';

import { VariantService } from '../../core/services/variant.service';
import { VariantRetriverService } from '../../core/services/variant-retriever.service';
import { VariantParserService } from '../../core/services/variant-parser.service';
import { Product, Variant, OptionType } from '../product';

interface OptionTypesCode {
  [id: string]: {
    [id: string]: {
      optionValue: {};
      variantIds: Array<any>;
    }
  }
}

@Component({
  selector: 'app-product-variants',
  template: `
    <div>

      <button type="button" class="button" (click)="clearSelected()" *ngIf="hasSelectedOptions()">Clear options</button>

      <div *ngFor="let variant of (options | keys)">

        <h4>{{ variant.key }}</h4>

        <app-round-button
          *ngFor="let values of (variant.value | keys)"
          [class.selected]="values.key === currentSelectedOptions[variant.key]"
          [class.inactive]="isDisabled(correspondingOptions[variant.key], values.value['optionValue'].name)"
          (click)="!isDisabled(correspondingOptions[variant.key], values.value['optionValue'].name) && onSelectValue(values)">
          {{ values.key }}
        </app-round-button>

      </div>

    </div>
  `,
  styles: [`
    button.selected {
      background: red;
    }
    .disabled {
      display:none
    }
  `],
})
export class ProductVariantsComponent implements OnInit, AfterViewInit {
  @Input() variants: Variant[];
  @Input() product: Product;
  @Input() optionTypes: OptionType[];
  @Input() get variant() {
    return this.variantValue;
  }
  set variant(value) {
    this.variantValue = value;
    this.variantChange.emit(this.variantValue);
  }
  @Output() variantChange = new EventEmitter();
  variantValue = null;
  options: OptionTypesCode = {};
  mainOptions: any;
  correspondingOptions: any;
  currentSelectedOptions: any = {};
  variantId: string = null;

  constructor(
    private variantService: VariantService,
    private variantParser: VariantParserService,
    private variantRetriever: VariantRetriverService,
  ) {  }

  ngOnInit() {
    this.options = this.variantParser
      .getOptionsToDisplay(this.variants, this.optionTypes);

    this.mainOptions = this.makeGlobalOptinTypesHash(this.options);
    this.correspondingOptions = this.mainOptions;

  }

  ngAfterViewInit() {
    window.setTimeout(() => {
      this.variantValue = this.variants.find(variant => variant.master);
      this.variantChange.emit(this.variantValue);
    })
  }

  makeGlobalOptinTypesHash(customOptionTypes) {
    const temp = {};
    for (const key in customOptionTypes) {
      if (customOptionTypes.hasOwnProperty(key)) {
        temp[key] = Object.keys(customOptionTypes[key]);
      }
    };
    return temp;
  }

  createNewCorrespondingOptions(newOptions, optionKey) {
    for (const key in this.correspondingOptions) {
      if (this.correspondingOptions.hasOwnProperty(key) && key !== optionKey) {
        this.correspondingOptions[key] = newOptions[key];
      }
    }
  }

  clearSelected(): void {
    this.correspondingOptions = this.mainOptions;
    this.currentSelectedOptions = {};
  }

  onSelectValue(value: any): void {
    const result = new VariantRetriverService()
                    .getVariant(this.currentSelectedOptions,
                                this.options,
                                value, this.product);

    this.createNewCorrespondingOptions(result.newCorrespondingOptions,
                                       value.value.optionValue.optionTypeName);

    this.currentSelectedOptions = result.newSelectedoptions;

    if (result.variant) {
      const newVariant: Variant = result.variant;
      this.variantId = newVariant._id;
      this.variant = newVariant;
    }
  }

  hasSelectedOptions(): boolean {
    return Object.keys(this.currentSelectedOptions).length > 0;
  }

  isDisabled(arrayToCheck, value) {
    if (Object.keys(this.currentSelectedOptions).length === 0) return false;

    return (arrayToCheck.indexOf(value) === -1);
  }
}
