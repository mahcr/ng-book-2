import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { ArticleComponent, RedditApp } from './chapter-1/';

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
