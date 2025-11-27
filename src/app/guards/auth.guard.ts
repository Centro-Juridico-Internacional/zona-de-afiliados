import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '@app/services/auth.service';

/**
 * Guard para proteger rutas que requieren autenticación
 * Verifica si el usuario tiene una sesión activa
 */
export const authGuard: CanActivateFn = (route, state) => {
    const authService = inject(AuthService);
    const router = inject(Router);

    // Verificar si hay datos de usuario en localStorage
    const userData = authService.getUserData();

    if (userData && userData.nit) {
        // Usuario autenticado
        return true;
    }

    // No autenticado - redirigir a landing
    console.log('Acceso denegado - redirigiendo a landing');
    router.navigate(['/landing']);
    return false;
};
