import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AppUser } from 'src/app/models/app-user.model';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  @Input() title = '';
  @Input() user: AppUser | null = null;
  @Input() menuItems: any[] = [];
  @Output() loginRequest = new EventEmitter<any>();
  @Output() logoutRequest = new EventEmitter<any>();

  isCollapsed = false;
  // form model
  model = { username: '', password: '' };

  constructor() {}

  ngOnInit(): void {}

  onLoginFormSubmit() {
    this.loginRequest.emit(this.model);
  }

  onLogoutClick() {
    this.logoutRequest.emit();
  }
}
