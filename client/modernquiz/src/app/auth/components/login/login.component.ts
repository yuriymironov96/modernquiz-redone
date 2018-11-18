import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  hide = true;
  loading = false;
  errors = {};
  form: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      login: [null, Validators.required],
      password: [null, Validators.required]
    });
  }

  onSubmit() {
    this.loading = true;
    this.authService.login(
      this.form.get('login').value,
      this.form.get('password').value
    ).subscribe(
      success => {
        this.authService.getCurrrentUser().subscribe(
          nameSuccess => {
            this.router.navigateByUrl('home');
          }
        );
      },
      error => {
        this.loading = false;
        this.errors = {
          'error': 'Invalid credentials'
        };
        this.createForm();
      });
  }
}
