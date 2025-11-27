import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

import { ServiceNavbarComponent } from '@app/components/service-navbar/service-navbar';
import { FooterComponent } from '@app/components/footer/footer';

@Component({
  selector: 'app-service-info',
  standalone: true,
  templateUrl: './service-info.html',
  styleUrls: ['./service-info.scss'],
  imports: [
    CommonModule,
    ServiceNavbarComponent,
    FooterComponent
  ]
})
export class ServiceInfoComponent implements OnInit {

  serviceId: string | null = null;
  serviceData: any = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    window.scrollTo(0, 0);

    this.serviceId = this.route.snapshot.paramMap.get('id');
    this.serviceData = this.services[this.serviceId as string];
  }

  goBack() {
    window.scrollTo(0, 0);
    this.router.navigate(['/landing']);
  }

  services: any = {
    'diplomados': {
      title: 'Diplomados',
      description: 'Programas especializados para fortalecer tus competencias jurídicas.',
      content: `
        <h2>¿Qué son los Diplomados?</h2>
        <p>Son programas de formación avanzada dirigidos a profesionales del derecho y estudiantes.</p>

        <h2>¿Quiénes pueden acceder?</h2>
        <p>Los afiliados activos del Centro Jurídico Internacional.</p>

        <h2>Beneficios</h2>
        <ul>
          <li>Certificación nacional</li>
          <li>Acceso a plataforma virtual</li>
          <li>Material académico descargable</li>
          <li>Descuentos exclusivos por afiliación</li>
        </ul>
      `
    },

    'consultas-online': {
      title: 'Consultas Online',
      description: 'Acceso directo a profesionales del derecho para resolver inquietudes.',
      content: `
        <h2>¿Qué incluye este servicio?</h2>
        <p>Consultas legales por videollamada, WhatsApp o correo.</p>

        <h2>Para usuarios no afiliados</h2>
        <p>Pueden solicitar una consulta de prueba con costo preferencial.</p>
      `
    },

    'seminario-afiliado': {
      title: 'Seminario Afiliado',
      description: 'Eventos exclusivos con ponentes especializados.',
      content: `
        <h2>¿En qué consiste?</h2>
        <p>Seminarios mensuales con expertos del derecho contemporáneo.</p>
      `
    },

    'workshop-afiliados': {
      title: 'Workshops Afiliados',
      description: 'Talleres prácticos con asesoría personalizada.',
      content: `
        <h2>Aprendizaje práctico</h2>
        <p>Sesiones colaborativas orientadas a resolver casos reales.</p>
      `
    },

    'capacitaciones': {
      title: 'Capacitación',
      description: 'Herramientas para control y validación de procesos internos.',
      content: `
        <h2>Propósito</h2>
        <p>Guiar a las empresas en el cumplimiento normativo interno.</p>
      `
    }
  };

}
