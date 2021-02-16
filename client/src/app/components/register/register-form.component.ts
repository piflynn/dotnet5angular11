import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { matchValues } from 'src/app/validators/match-values.validator';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss'],
})
export class RegisterComponent implements OnInit {
  @Output() registerRequest = new EventEmitter<any>();
  @Output() cancel = new EventEmitter();
  registerForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      username: ['', [Validators.required]],
      password: [
        '',
        [Validators.required, Validators.minLength(4), Validators.maxLength(8)],
      ],
      confirmPassword: [
        { value: '', disabled: true },
        [Validators.required, matchValues('password')],
      ],
    });
  }

  ngOnInit(): void {
    this.setupForm();
  }

  get controls() {
    return Object.keys(this.registerForm.controls);
  }

  onCancel() {
    this.cancel.emit();
  }

  onSubmit() {
    this.registerRequest.emit(this.registerForm.value);
  }

  private setupForm() {
    this.registerForm.get('password')?.valueChanges.subscribe(() => {
      if (this.registerForm.get('password')?.value) {
        this.registerForm.get('confirmPassword')?.enable();
      } else {
        this.registerForm.get('confirmPassword')?.disable();
      }
    });
  }
}
