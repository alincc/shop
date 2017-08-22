import { NgModule, ModuleWithProviders, Optional, SkipSelf } from '@angular/core';
import { XHRBackend, RequestOptions } from '@angular/http';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { SearchBoxComponent } from './search-box/search-box.component';
import { ProductsModule } from '../products/products.module';
import { VariantService } from './services/variant.service';
import { VariantRetriverService } from './services/variant-retriever.service';
import { VariantParserService } from './services/variant-parser.service';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ProductsModule,
  ],
  exports: [
    SearchBoxComponent,
  ],
  declarations: [
    SearchBoxComponent,
  ],
  providers: [
    VariantService,
    VariantRetriverService,
    VariantParserService,
  ],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import it in the AppModule only');
    }
  }

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [
        VariantService,
        VariantRetriverService,
        VariantParserService,
      ],
      // providers: [
      //   {
      //     provide: HttpService,
      //     useFactory: httpServiceFactory,
      //     deps: [XHRBackend, RequestOptions, LoaderService ],
      //   },
      // ]
    }
  }
}
