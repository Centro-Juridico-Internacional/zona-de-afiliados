import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '@app/services/auth.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.scss']
})
export class NavbarComponent {

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  logout() {
    const userData = this.authService.getUserData();

    if (userData && userData.nit) {
      // Llamar al servicio para cerrar sesión en el servidor
      this.authService.logout(userData.nit).subscribe({
        next: () => {
          // Limpiar datos locales
          this.authService.logoutLocal();
          // Redireccionar a landing
          this.router.navigate(['/landing']);
        },
        error: (error) => {
          console.error('Error al cerrar sesión:', error);
          // Incluso si falla la API, cerrar sesión localmente
          this.authService.logoutLocal();
          this.router.navigate(['/landing']);
        }
      });
    } else {
      // Si no hay datos de usuario, solo limpiar y redireccionar
      this.authService.logoutLocal();
      this.router.navigate(['/landing']);
    }
  }

}
