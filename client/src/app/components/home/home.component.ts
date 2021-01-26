import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  registerMode = false;
  apiUrl = 'https://localhost:5001/api';
  constructor(
    private toastr: ToastrService,
    private accountService: AccountService
  ) {}

  ngOnInit(): void {}

  onRegisterClick() {
    this.registerMode = true;
  }

  onRegisterRequest(model: any) {
    this.accountService.register(model).subscribe(
      (user) => {
        console.log(user);
        this.registerMode = false;
      },
      (error) => {
        console.log(error);
        this.toastr.error(error.error);
      }
    );
  }

  onCancelRegister() {
    this.registerMode = false;
  }
}
