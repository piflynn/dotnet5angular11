import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AccountService } from './services/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  apiUrl = 'https://localhost:5001/api';
  title = 'Dating App';
  users: any;
  loggedIn = false;
  constructor(
    private accountService: AccountService,
    private http: HttpClient
  ) {}
  ngOnInit() {
    this.getUsers();
  }
  onLoginRequest(model: any) {
    this.accountService.login(model).subscribe(response => {
      console.log(response);
      this.loggedIn = true;
    }, console.log);
  }
  private getUsers() {
    this.http
      .get(`${this.apiUrl}/users`)
      .subscribe(response => (this.users = response), console.log);
  }
}
