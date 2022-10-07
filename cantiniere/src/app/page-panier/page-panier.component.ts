import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-panier',
  templateUrl: './page-panier.component.html',
  styleUrls: ['./page-panier.component.css']
})
export class PagePanierComponent implements OnInit {
isAuth= false /* variable verfier si l'utilisature est connectée ou pas*/
commands=[{
jour:"lundi",
plat:"plat1Name",
qty:1,
prix:23
},
{
  jour:"judi",
  plat:"plat2Name",
  qty:2,
  prix:15
  },
  {
    jour:"mercurdi",
    plat:"plat3Name",
    qty:1,
    prix:10
    },
]
 total = this.commands.reduce((accumulator, obj) => {
  return accumulator + obj.prix;
}, 0);

  constructor() { }

  ngOnInit(): void {
  }

}
 