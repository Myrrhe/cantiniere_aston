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
  ) {}
  /**
   * The title of the page
   */
  title = 'cantiniere';
}
