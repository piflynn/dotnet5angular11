import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  apiUrl = 'https://localhost:5001/api';
  title = 'The Dating App';
  users: any;
  constructor(private http: HttpClient) {}
  ngOnInit() {
    this.getUsers();
  }
  private getUsers() {
    this.http
      .get(`${this.apiUrl}/users`)
      .subscribe((response) => (this.users = response), console.log);
  }
}
