import { Component, OnInit } from '@angular/core';
import { TokenService } from '../services/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-panier',
  templateUrl: './page-panier.component.html',
  styleUrls: ['./page-panier.component.css'],
})
export class PagePanierComponent implements OnInit {
isAuth = this.tokenService.isLogged(); /* variable verfier si l'utilisature est connectée ou pas*/

/* array de command qui ajouter dans le panier
*/
commands=[{
jour:'Lundi',
plat:'plat1Name',
qty:1,
prix:23,
},
{
  jour:'Jeudi',
  plat:'plat2Name',
  qty:2,
  prix:15,
  },
  {
    jour:'Mercredi',
    plat:'plat3Name',
    qty:1,
    prix:10,
    },
]
/* total variable affich les sum de prix de commandes*/
 total = this.commands.reduce((accumulator, obj) => {
  return accumulator + obj.prix;
}, 0);

  constructor(
    private readonly tokenService: TokenService,
    public router: Router,
  ) { }

  ngOnInit(): void {
  }

  toLogin() {
    this.router.navigate(['login']);
  }

  validateCommand() {
  }

}
