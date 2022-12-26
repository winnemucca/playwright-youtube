import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bookCatalog';

  search(query: string) {
    console.log(`Search: ${query}`);
  }
}
