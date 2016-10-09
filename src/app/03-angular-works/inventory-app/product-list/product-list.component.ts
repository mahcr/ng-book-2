import { Component } from '@angular/core';

import { EventEmitter } from '@angular/core';

import { Product } from '../';

@Component({
  selector: 'product-list',
  inputs: ['productList'],
  outputs: ['onProductSelected'],
  template: `
    <div>
      <product-row *ngFor="let myProduct of productList" [product]="myProduct" (click)="clicked(myProduct)" [class.selected]="isSelected(myProduct)"></product-row>
    </div>
  `
})
export class ProductListComponent {
  /**
   * @input - product list
   */
  public productList: Product[];

  /**
   * @output - output current product when is selected
   */
  public onProductSelected: EventEmitter<Product>;

  /**
   * @property - current product
   */
  public currrentProduct: Product;

  constructor() {
    this.onProductSelected = new EventEmitter();
  }

  clicked(product: Product): void {
    this.currrentProduct = product;
    this.onProductSelected.emit(product);
  }

  isSelected(product: Product): boolean {
    if (!product || !this.currrentProduct) {
      return false;
    }
    return product.sku === this.currrentProduct.sku;
  }


}
