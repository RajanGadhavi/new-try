import { Component } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account',
  imports: [],
  standalone: true,
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {
  constructor(private auth: AuthService, private router: Router) {}

  async login(email: string, password: string) {
    try {
      await this.auth.login(email, password);
      this.router.navigate(['/userprofile']);
    } catch (error) {
      console.error('Login Error:', error);
    }
  }

  async signup(email: string, password: string) {
    try {
      await this.auth.signup(email, password);
      this.router.navigate(['/userprofile']);
    } catch (error) {
      console.error('Signup Error:', error);
    }
  }
}
