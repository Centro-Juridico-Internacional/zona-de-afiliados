import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-service-navbar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './service-navbar.html',
  styleUrls: ['./service-navbar.scss']
})
export class ServiceNavbarComponent {
  constructor(private router: Router) {}

  goHome() {
    this.router.navigate(['/landing']);
  }
}
