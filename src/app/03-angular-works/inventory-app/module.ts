import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { Product,
         PriceDisplayComponent,
         ProductDepartmentComponent,
         ProductImageComponent,
         ProductListComponent,
         ProductRowComponent } from './';

@NgModule({
  declarations: [
    PriceDisplayComponent,
    ProductDepartmentComponent,
    ProductImageComponent,
    ProductListComponent,
    ProductRowComponent
  ],
  imports: [ BrowserModule ],
  exports: [
    PriceDisplayComponent,
    ProductDepartmentComponent,
    ProductImageComponent,
    ProductListComponent,
    ProductRowComponent
  ]
})
export class InventoryModule { }
