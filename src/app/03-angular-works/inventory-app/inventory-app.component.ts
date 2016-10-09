import { Component } from '@angular/core';

import { Product } from './';

@Component({
  selector: 'inventory-app',
  template: `
    <div class="inventory-app">
      <product-list [productList]="products" (onProductSelected)="productWasSelected($event)">
      </product-list>
    </div>
  `
})
export class InventoryApp {

  public products: Product[];

  constructor() {

    this.products = [
      new Product(
        'NiceHat',
        'A Nice black hat',
        'http://media.goorin.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/imports/products/100-3333-BLK-F01.png',
        ['Men', 'Accessories', 'Hats'],
        29.99),
      new Product(
        'NEATOJACKET',
        'Blue Jacket',
        'http://www.511tactical.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/48103/019/48103_019_01.jpg',
        ['Women', 'Apparel', 'Jackets & Vests'],
        29.99),
      new Product(
        'MYSHOES',
        'Black Running Shoes',
        'https://media.journeys.com/images/products/1_349960_MD.JPG',
        ['Men', 'Shoes', 'Running Shoes'],
        29.99)];

  }

  productWasSelected(product: Product): void {
    console.log('Product clicked: ', product);
  }

}
