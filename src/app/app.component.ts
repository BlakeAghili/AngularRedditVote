import { Component } from '@angular/core';
import {Article} from './article/article.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-reddit';
  articles: Article[];

  constructor() {
    this.articles = [
      new Article('Drones', 'http://www.DoD.ru', 43),
      new Article('Full Stack', 'http://www.stack.io', 32),
      new Article('Half Stack', 'http://www.half.org', 11)
    ];
  }

  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
    console.log(`So we submitted article title ${title.value} from this site: ${link.value}`);
    this.articles.push(new Article(title.value, link.value, 1));

    title.value = '';
    link.value = '';

    return false;
  }

  sortedArticles(): Article[] {
    return this.articles.sort((a: Article, b: Article) => b.votes - a.votes);
  }
}
