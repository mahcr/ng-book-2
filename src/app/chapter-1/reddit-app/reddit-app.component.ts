import { Component } from '@angular/core';

import { ArticleComponent, Article } from './index';

@Component({
    selector: 'reddit',
    template: `
        <form class="ui large form segment">
            <h3 class="ui header">Add a link</h3>

            <div class="field">
                <label for="title">Title:</label>
                <input name="title" #newTitle>
            </div>
            <div class="field">
                <label for="link">Link:</label>
                <input name="link" #newLink>
            </div>
            <button (click)="addArticle(newTitle, newLink)" class="ui positive right floated button">
                Submit link
            </button>
        </form>
        <div class="ui grid posts">
          <reddit-article *ngFor="let article of sortedArticles()" [articleInput]="article"></reddit-article>
        </div>
    `,
    directives:  [ ArticleComponent ]
})
export class RedditApp {

    articleList: Article[];

    constructor() {
      // define list of articles
      this.articleList = [
        new Article('Angular 2', 'http://angular.io', 3),
        new Article('Fullstack', 'http://fullstack.io', 2),
        new Article('Angular Homepage', 'http://angular.io', 1)
      ]
    }
    /**
     * This function add new articles getting the info from the form
     * title and link are HTMLInputElement objects. That means we can set their properties. When we change the
     * value property , the input tag on our page changes
     */
    addArticle(title: HTMLInputElement, link:HTMLInputElement) {
      // add new article
      this.articleList.push(new Article(title.value, link.value, 0));
      // clear inputs
      title.value = '';
      link.value = '';
    }

    sortedArticles(): Article[] {
      return this.articleList.sort((a: Article, b: Article)=> b.votes - a.votes);
    }

}
