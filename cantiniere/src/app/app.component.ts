import { Component } from '@angular/core';
import { Router } from '@angular/router';

/**
 * The main component
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(
    private router: Router
  ) {}
  /**
   * The title of the page
   */
  title = 'cantiniere';

  hasRoute(route: string) {
      return this.router.url == route;
  }
}
