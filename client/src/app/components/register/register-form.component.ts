import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss'],
})
export class RegisterComponent implements OnInit {
  @Output() registerRequest = new EventEmitter<any>();
  @Output() cancel = new EventEmitter();
  model = { username: '', password: '', favoriteUser: '' };
  constructor() {}

  ngOnInit(): void {}

  onCancel() {
    this.cancel.emit();
  }

  onSubmit() {
    this.registerRequest.emit(this.model);
  }
}
