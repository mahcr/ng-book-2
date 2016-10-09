import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { ArticleComponent, RedditApp } from './01-first-app/';

@NgModule({
  declarations: [
    ArticleComponent,
    RedditApp
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [RedditApp]
})
export class AppModule { }
