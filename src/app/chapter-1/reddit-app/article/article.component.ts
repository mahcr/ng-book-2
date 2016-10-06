import { Component } from '@angular/core';

import { Article } from '../../';

@Component({
    selector: 'reddit-article',
    inputs: [ 'articleInput' ],
    host: {
        class: 'row'
    },
    template: `
    <div class="four wide column center aligned votes">
        <div class="ui statistic">
            <div class="value">
            {{ articleInput.votes }}
            </div>
            <div class="label">
            Points
            </div>
        </div>
    </div>
    <div class="twelve wide column">
        <a class="ui large header" href="{{ articleInput.link }}">
            {{ articleInput.title }}
        </a>
        <div class="meta">({{ articleInput.domain() }})</div>
        <ul class="ui big horizontal list voters">
            <li class="item">
                <a href (click)="voteUp()">
                    <i class="arrow up icon"></i>
                    upvote
                </a>
            </li>
            <li class="item">
              <a href (click)="voteDown()">
                <i class="arrow down icon"></i>
                downvote
              </a>
            </li>
        </ul>
    </div>
    `
})
export class ArticleComponent {
  articleInput: Article;

  /**
   * increase vote count
   * @return {boolean} this avoid the browser refresh the page
   */
  voteUp():boolean {
    this.articleInput.voteUp();
    return false;
  }

  /**
   * decrease vote count
   * @return {boolean} this avoid the browser refresh the page
   */
  voteDown():boolean {
    this.articleInput.voteDown();
    return false;
  }

}
