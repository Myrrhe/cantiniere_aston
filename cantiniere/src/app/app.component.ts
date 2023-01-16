import { Component } from '@angular/core';
import { Router } from '@angular/router';

import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import { PopUpComponent } from './pop-up/pop-up.component';
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
    public dialogRef :MatDialog,
    private readonly router: Router,
    ){}

    // openDialog(){
    //   this.dialogRef.open(PopUpComponent,{height:'80px',width:'100px',data:"right click"
    // })
    // }

  title = 'cantiniere';

  // This method is used to check the current URL, to decide which component to include in the page
  hasRoute(route: string) {
    return this.router.url === route;
  }

  hasRouteBeginBy(route: string) {
    return this.router.url.startsWith(route);
  }
}
