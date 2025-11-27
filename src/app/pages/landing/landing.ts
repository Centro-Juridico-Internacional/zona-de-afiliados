import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

import { LandingHeaderComponent } from '@app/components/landing-header/landing-header';
import { FooterComponent } from '@components/footer/footer';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [
    CommonModule,
    LandingHeaderComponent,
    FooterComponent
  ],
  templateUrl: './landing.html',
  styleUrls: ['./landing.scss']
})
export class LandingComponent {

  constructor(private router: Router) { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }

  servicios = [
    { title: 'Diplomados', desc: 'Programas de formación jurídica con enfoque práctico.', iconClass: 'bi bi-briefcase', link: 'diplomados' },
    { title: 'Consultas Online', desc: 'Acceso directo a nuestros abogados desde cualquier lugar.', iconClass: 'bi bi-search', link: 'consultas-online' },
    { title: 'Capacitaciones', desc: 'Herramientas para el control de procesos internos.', iconClass: 'bi bi-check-square', link: 'capacitaciones' },
    { title: 'Seminario Afiliado', desc: 'Seminarios exclusivos con certificación.', iconClass: 'bi bi-mortarboard', link: 'seminario-afiliado' },
    { title: 'Workshop Afiliados', desc: 'Talleres prácticos interactivos.', iconClass: 'bi bi-people', link: 'workshop-afiliados' }
  ];

  goService(link: string) {
    this.router.navigate(['/service-info', link]);
  }
}
