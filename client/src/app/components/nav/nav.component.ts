import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  @Input() title = '';
  @Input() loggedIn = false;
  @Output() loginRequest = new EventEmitter<any>();
  @Output() logoutRequest = new EventEmitter<any>();

  isCollapsed = false;
  items: string[] = [
    'The first choice!',
    'And another choice for you.',
    'but wait! A third!',
  ];
  model: any = {};

  constructor() {}

  ngOnInit(): void {}
  onLoginFormSubmit() {
    this.loginRequest.emit(this.model);
  }
  onLogoutClick() {
    this.logoutRequest.emit();
  }
}
