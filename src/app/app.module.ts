import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { InventoryModule } from './03-angular-works/inventory-app/module';
import { InventoryApp }    from './03-angular-works/inventory-app/inventory-app.component';

@NgModule({
  declarations: [
    InventoryApp
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InventoryModule
  ],
  providers: [],
  bootstrap: [ InventoryApp ]
})
export class AppModule { }
