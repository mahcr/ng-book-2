import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { HelloWord } from './chapter-1/hello-world/hello-world.component';

@NgModule({
  declarations: [
    HelloWord
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [HelloWord]
})
export class AppModule { }
