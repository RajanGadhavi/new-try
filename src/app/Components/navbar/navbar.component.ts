import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink,RouterLinkActive],
  standalone:true,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  
  constructor(private authService: AuthService, private router: Router) {}

  uP(){
    const user = this.authService.getCurrentUser();
    if (user) {
      this.router.navigate(['/userprofile']);
    } else {
      this.router.navigate(['/account']);
    }
  }
}
