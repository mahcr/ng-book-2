import { Component } from '@angular/core';

import { Product } from './';

@Component({
  selector: 'inventory-app',
  template: `
    <div class="inventory-app">
      <h1>{{ product.name }}</h1>
      <span>{{ product.sku }}</span>
    </div>
  `
})
export class InventoryApp {

  public product: Product[];

  constructor() {

    this.product = [
      new Product(
        'NiceHat',
        'A Nice black hat',
        '/resources/images/product/black-hat.jpg',
        ['Men', 'Accessories', 'Hats'],
        29.99),
      new Product(
        'NEATOJACKET',
        'Blue Jacket',
        '/resources/images/product/black-hat.jpg',
        ['Women', 'Apparel', 'Jackets & Vests'],
        29.99),
      new Product(
        'MYSHOES',
        'Black Running Shoes',
        '/resources/images/product/black-hat.jpg',
        ['Men', 'Shoes', 'Running Shoes'],
        29.99)];

  }

  productWasSelected(product: Product): void {
    console.log('Product clicked: ', product);
  }

}
