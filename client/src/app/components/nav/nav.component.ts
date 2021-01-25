import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  @Input() title = '';
  @Input() user: User | null = null;
  @Input() menuItems: string[] = [];
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
