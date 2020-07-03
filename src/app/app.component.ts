import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-reddit';

  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
    console.log(`So we submitted article title ${title.value} from this site: ${link.value}`);
    return false;
  }
}
