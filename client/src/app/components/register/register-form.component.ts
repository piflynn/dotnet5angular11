import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss'],
})
export class RegisterComponent implements OnInit {
  @Output() registerRequest = new EventEmitter<any>();
  model: any = {};
  constructor() {}

  ngOnInit(): void {}

  onCancel() {
    console.log('');
  }
  onSubmit() {
    this.registerRequest.emit(this.model);
  }
}
