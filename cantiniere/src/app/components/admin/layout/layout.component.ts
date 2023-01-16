/**
 * Title : Composant Layout
 * Description : Fichier TS du composant app-layout. Ce composant est la structure de la partie admin
 * Author : Thierry Maurouzel
*/

// Imports
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
})
export class LayoutComponent implements OnInit {

  ngOnInit(): void {
  }

}
