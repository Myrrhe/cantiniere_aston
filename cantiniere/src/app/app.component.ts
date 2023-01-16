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
    private readonly router: Router
  ) {}
  /**
   * The title of the page
   */
  title = 'cantiniere';

  // This method is used to check the current URL, to decide which component to include in the page
  hasRoute(route: string) {
    return this.router.url === route;
  }

  hasRouteBeginBy(route: string) {
    return this.router.url.startsWith(route);
  }
}
