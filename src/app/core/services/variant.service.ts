import { Injectable } from '@angular/core';

import { Variant, OptionType, OptionValue } from '../../products/product';

interface OptionTypesCode {
  [id: string]: {
    [id: string]: {
      optionValue: {};
      variantIds: Array<any>;
    }
  }
}

@Injectable()
export class VariantService {
  constructor() {  }

  getMatchingOptions(options: OptionValue[]) {
    return options.map(option => ({ [option.optionTypeName]: option.name }));
  }

  getVariants(variants: Variant[], optionTypes: OptionType[]): OptionTypesCode{
    let options: OptionTypesCode = {};

    optionTypes.forEach(optionType => {
      variants.forEach(variant => {

        variant.options.forEach(optionValue => {
          if (optionValue.optionTypeName == optionType.name) {

            const matchingOptions = this.getMatchingOptions(variant.options);

            const newVariant = {
              [variant._id]: matchingOptions,
            }

            let newVariantIds = [];

            if (options[optionType.name] && options[optionType.name][optionValue.name]) {
              newVariantIds = [
                ...options[optionType.name][optionValue.name].variantIds,
                { ...newVariant },
              ];
            }
            else {
              newVariantIds = [
                { ...newVariant },
              ];
            }

            options = {
              ...options,
              [optionType.name]: {
                ...options[optionType.name],
                [optionValue.name]: {
                  optionValue: optionValue,
                  variantIds: newVariantIds,
                }
              }
            }
          }
        })

      });
    });

    console.log('options', options);

    return options;
  }
}
