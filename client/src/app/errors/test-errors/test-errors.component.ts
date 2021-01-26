import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-errors',
  templateUrl: './test-errors.component.html',
  styleUrls: ['./test-errors.component.scss'],
})
export class TestErrorsComponent implements OnInit {
  baseUrl = 'https://localhost:5001/api';
  validationErrors: string[] = [];
  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  get400BadRequest() {
    this.http
      .get(`${this.baseUrl}/buggy/bad-request`)
      .subscribe(console.log, console.log);
  }

  get400Validation() {
    this.http
      .post(`${this.baseUrl}/account/register`, {})
      .subscribe(console.log, (error) => {
        console.log(error);
        this.validationErrors = error.flattened;
      });
  }

  get401Auth() {
    this.http
      .get(`${this.baseUrl}/buggy/auth`)
      .subscribe(console.log, console.log);
  }

  get404NotFound() {
    this.http
      .get(`${this.baseUrl}/buggy/not-found`)
      .subscribe(console.log, console.log);
  }

  get500Server() {
    this.http
      .get(`${this.baseUrl}/buggy/server-error`)
      .subscribe(console.log, (error) => {
        console.log(error);
      });
  }
}
