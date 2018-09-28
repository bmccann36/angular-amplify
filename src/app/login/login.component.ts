import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './../auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private auth: AuthService
  ) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.loginForm = this.fb.group({
      'email': ['', Validators.required],
      'password': ['', Validators.required]
    });
  }

  onSubmitLogin(value: any) {
    const config = {
      domain: 'xxx',
      scope: ['xxx'],
      redirectSignIn: 'xxxx',
      redirectSignOut: 'xxx',
      responseType: 'xxxx',
      userPoolWebClientId: 'xxxx'
    };
    const { xxx } = config;
    const clientId = config.userPoolWebClientId;
// PLACEHOLDER FOR SENSITIVE

  }
}
