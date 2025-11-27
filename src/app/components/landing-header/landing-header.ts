import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService, NitValidationResponse } from '@app/services/auth.service';

@Component({
  selector: 'app-landing-header',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './landing-header.html',
  styleUrls: ['./landing-header.scss']
})
export class LandingHeaderComponent {
  nit: string = '';
  isLoading: boolean = false;
  errorMessage: string = '';

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  onLogin(): void {
    // Limpiar mensaje de error previo
    this.errorMessage = '';

    // Validar que el campo no esté vacío
    if (!this.nit.trim()) {
      this.errorMessage = 'Por favor ingrese su NIT';
      return;
    }

    // Mostrar estado de carga
    this.isLoading = true;

    // Llamar al servicio de autenticación
    this.authService.validateNit(this.nit).subscribe({
      next: (response: NitValidationResponse) => {
        this.isLoading = false;

        // Verificar si el NIT es válido
        if (!response.isValid) {
          this.errorMessage = response.message || 'El NIT ingresado no es válido';
          return;
        }

        // Verificar si el usuario está activo
        if (!response.isActive) {
          this.errorMessage = response.message || 'Su cuenta se encuentra inactiva. Por favor contacte al administrador.';
          return;
        }

        // Verificar el límite de conexiones
        if (response.activeConnections >= response.maxConnections) {
          this.errorMessage = response.message || 'Ya está el límite de usuarios conectados permitidos. Por favor intente más tarde.';
          return;
        }

        // Si todo es válido, guardar datos y navegar
        if (response.userData) {
          this.authService.saveUserData(response.userData);
        }

        this.router.navigate(['/home']);
      },
      error: (error) => {
        this.isLoading = false;
        this.errorMessage = 'Error al validar el NIT. Por favor intente nuevamente.';
        console.error('Error en validación:', error);
      }
    });
  }
}
