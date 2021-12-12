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
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  email!: string;
  password!: string;
  confirmPassword!: string;
  registerForm: FormGroup;
  error: boolean = false;

  constructor(
    private userService: UsersService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.registerForm = this.formBuilder.group({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      confirmPassword: new FormControl('', [Validators.required]),
    });
  }
  ngOnInit(): void {}

  register() {
    const form = this.registerForm.getRawValue();
    const user = { email: form.email, password: form.password };
    this.userService.register(user).subscribe(() => {
      this.router.navigateByUrl('hotels');
    });
  }

  validatePass() {
    const form = this.registerForm.getRawValue();
    this.error = form.password !== form.confirmPassword;
  }
}
