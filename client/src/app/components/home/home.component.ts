import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserListModel } from 'src/app/models/user-list.model';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  registerMode = false;
  apiUrl = 'https://localhost:5001/api';
  constructor(private accountService: AccountService) {}

  ngOnInit(): void {}

  onRegisterClick() {
    this.registerMode = true;
  }

  onRegisterRequest(model: any) {
    this.accountService.register(model).subscribe((user) => {
      console.log(user);
      this.registerMode = false;
    }, console.log);
  }

  onCancelRegister() {
    this.registerMode = false;
  }
}
