import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginPage } from './login-page/login-page';
import { RegisterPage } from './register-page/register-page';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,LoginPage,RegisterPage,CommonModule,FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'forms';
  showLogin = true;

  toggleToLogin() {
    this.showLogin = true;
  }

  toggleToRegister() {
    this.showLogin = false;
  }
}
