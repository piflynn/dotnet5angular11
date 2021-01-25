import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from './models/user.model';
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
  menuItems = [];
  currentUser$ = this.accountService.currentUser$;
  constructor(private accountService: AccountService) {}
  ngOnInit() {
    this.setCurrentUser();
  }
  onLoginRequest(model: any) {
    this.accountService.login(model).subscribe((response) => {
      console.log(response);
    }, console.log);
  }
  onLogoutRequest() {
    this.accountService.logout();
  }

  // Sets current user from browser/application/localStorage
  setCurrentUser() {
    const userStorage = localStorage.getItem('user');
    if (!!userStorage) {
      const user: User = JSON.parse(userStorage);
      this.accountService.setCurrentUser(user);
    }
  }
}
