import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

import { LandingHeaderComponent } from './components/landing-header/landing-header';
import { NavbarComponent } from './components/navbar/navbar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, LandingHeaderComponent, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  showLandingHeader = false;
  showMainNavbar = true;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // Scroll to top on navigation
        window.scrollTo(0, 0);

        const url = event.urlAfterRedirects;

        // Pages that have their own specific navbar
        const serviceRoutes = [
          '/diplomados',
          '/consultas-online',
          '/capacitaciones',
          '/seminario-afiliado',
          '/workshop-afiliados'
        ];

        this.showLandingHeader = (url === '/landing');

        const isServiceRoute = serviceRoutes.includes(url) || url.startsWith('/service-info/');

        // Show main navbar only if NOT landing AND NOT a service page
        this.showMainNavbar = !this.showLandingHeader && !isServiceRoute;
      }
    });
  }
}
