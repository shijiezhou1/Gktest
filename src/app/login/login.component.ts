import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AuthService } from '../services';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  returnUrl: string;
  loading = false;
  loginForm: FormGroup;
  invalidInput: boolean;
  submitted = false;
  msg: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private authService: AuthService,
  ) { }

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/';
    this.loginForm = this.formBuilder.group({
      password: ['', Validators.required],
      username: ['', Validators.required],
    });

  }

  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;

    if (this.loginForm.invalid) { return; }

    this.loading = true;
    this.authService.login(this.f.username.value, this.f.password.value)
      .pipe(first())
      .subscribe(
        data => {
          if (!data.key) {
            // key not found
            this.invalidInput = true;
            this.loading = false;
            this.msg = JSON.stringify(data);
            // clean up
            localStorage.removeItem('user');
          } else {
            this.invalidInput = false;
            this.router.navigate([this.returnUrl]);
          }
        },
        error => {
          this.invalidInput = true;
          this.loading = false;
        });
  }
}
