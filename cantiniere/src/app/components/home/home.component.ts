import { Component, OnInit } from '@angular/core';
import { Menu } from 'src/app/interfaces/menu';
import { DateService } from 'src/app/services/date.service';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  menuAvailableForThisWeek!: Menu[];

  constructor(
    private readonly menuService: MenuService,
    private readonly dateService: DateService,
  ) { }

  ngOnInit(): void {
    this.menuService.findAllAvailableForThisWeek().subscribe((data: any) => {
      console.log(this.dateService.getCurrentWeekNumber());
      this.menuAvailableForThisWeek = data;
    });
  }

}
