import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { Router } from '@angular/router';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  email!: string;
  password!: string;
  loginForm: FormGroup;
  error: boolean = false;

  constructor(
    private userService: UsersService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.loginForm = this.formBuilder.group({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }
  ngOnInit(): void {}

  login() {
    const form = this.loginForm.getRawValue();
    const user = { email: form.email, password: form.password };
    this.userService.login(user).subscribe(
      (data) => {
        console.log(data);
        if (data.length > 0 && data[0].password === form.password) {
          this.router.navigateByUrl('hotels');
        } else {
          this.error = true;
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
