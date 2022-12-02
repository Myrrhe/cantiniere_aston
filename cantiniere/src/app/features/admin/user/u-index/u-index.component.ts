import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/app/environments/environment';

@Component({
  selector: 'app-u-index',
  templateUrl: './u-index.component.html',
  styleUrls: ['./u-index.component.css']
})
export class UIndexComponent implements OnInit {

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get(`${this.apiUrl}/user/findall`).subscribe(
      data => console.log(data)
    )
  }


  // getUsers(): Observable<User[]> {
  //   return this.http.get<User[]>(`${this.apiUrl}/user/findall`);
  // }
}
