import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../components/navbar/navbar';
import { FooterComponent } from '../../components/footer/footer';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    FooterComponent
  ],
  templateUrl: './home.html',
  styleUrls: ['./home.scss']
})
export class HomeComponent {
  servicios = [
    {
      title: "Diplomados",
      desc: "Programas de formación jurídica con enfoque práctico.",
      img: "assets/images/diplomado.jpg",
      link: "/diplomados"
    },
    {
      title: "Consultas Online",
      desc: "Acceso directo a nuestros abogados desde cualquier lugar.",
      img: "assets/images/consultas.jpg",
      link: "/consultas-online"
    },
    {
      title: "Capacitaciones",
      desc: "Entrenamientos y talleres para fortalecer tus competencias.",
      img: "assets/images/capacitacion.jpg",
      link: "/capacitaciones"
    },
    {
      title: "Seminario Afiliado",
      desc: "Sesiones especializadas sobre temas legales actuales.",
      img: "assets/images/seminarios.jpg",
      link: "/seminario-afiliado"
    },
    {
      title: "Workshops Afiliados",
      desc: "Espacios colaborativos de aprendizaje y networking.",
      img: "assets/images/workshop.jpg",
      link: "/workshop-afiliados"
    }
  ];

  constructor(private router: Router) { }

  goService(link: string): void {
    this.router.navigate([link]);
  }
}