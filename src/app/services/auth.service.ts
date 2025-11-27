import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { CryptoService } from './crypto.service';

export interface NitValidationResponse {
    isValid: boolean;
    isActive: boolean;
    activeConnections: number;
    maxConnections: number;
    message?: string;
    userData?: any;
}

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    // TODO: Configurar con la URL real de la API
    private readonly API_URL = 'https://api.example.com/validate-nit';
    private readonly MAX_CONNECTIONS = 3;

    constructor(
        private http: HttpClient,
        private cryptoService: CryptoService
    ) { }

    /**
     * Valida el NIT del usuario consultando la API
     * Verifica:
     * 1. Que el NIT sea válido
     * 2. Que el usuario esté activo
     * 3. Que no exceda el límite de 3 conexiones simultáneas
     */
    validateNit(nit: string): Observable<NitValidationResponse> {
        if (!nit || nit.trim() === '') {
            return of({
                isValid: false,
                isActive: false,
                activeConnections: 0,
                maxConnections: this.MAX_CONNECTIONS,
                message: 'Por favor ingrese su NIT'
            });
        }

        // TODO: Reemplazar con llamada real a la API
        // return this.http.post<any>(`${this.API_URL}`, { nit }).pipe(
        //   map(response => this.processApiResponse(response)),
        //   catchError(error => this.handleError(error))
        // );

        // Simulación temporal
        return this.simulateApiCall(nit);
    }

    /**
     * Método temporal para simular la validación
     */
    private simulateApiCall(nit: string): Observable<NitValidationResponse> {
        return new Observable(observer => {
            setTimeout(() => {
                if (nit === '999999999') {
                    observer.next({
                        isValid: true,
                        isActive: false,
                        activeConnections: 0,
                        maxConnections: this.MAX_CONNECTIONS,
                        message: 'Su cuenta se encuentra inactiva. Por favor contacte al administrador.'
                    });
                } else if (nit === '888888888') {
                    observer.next({
                        isValid: true,
                        isActive: true,
                        activeConnections: 3,
                        maxConnections: this.MAX_CONNECTIONS,
                        message: 'Ya está el límite de usuarios conectados permitidos. Por favor intente más tarde.'
                    });
                } else if (nit.length >= 8) {
                    observer.next({
                        isValid: true,
                        isActive: true,
                        activeConnections: 1,
                        maxConnections: this.MAX_CONNECTIONS,
                        userData: { nit, name: 'Usuario de prueba' }
                    });
                } else {
                    observer.next({
                        isValid: false,
                        isActive: false,
                        activeConnections: 0,
                        maxConnections: this.MAX_CONNECTIONS,
                        message: 'El NIT ingresado no es válido'
                    });
                }
                observer.complete();
            }, 1000);
        });
    }

    /**
     * Cierra la sesión del usuario y notifica al servidor
     * Decrementa el contador de conexiones activas
     */
    logout(nit: string): Observable<any> {
        // TODO: Reemplazar con llamada real a la API
        // return this.http.post<any>(`${this.API_URL}/logout`, { nit });

        // Simulación temporal
        return new Observable(observer => {
            setTimeout(() => {
                console.log(`Usuario ${nit} cerró sesión - conexiones activas decrementadas`);
                observer.next({ success: true, message: 'Sesión cerrada correctamente' });
                observer.complete();
            }, 500);
        });
    }

    /**
     * Limpia los datos de sesión locales
     */
    logoutLocal(): void {
        localStorage.removeItem('userData');
        localStorage.removeItem('nit');
        console.log('Datos de sesión locales eliminados');
    }

    /**
     * Guarda los datos del usuario en el almacenamiento local con encriptación
     */
    saveUserData(userData: any): void {
        if (userData) {
            // Encriptar datos antes de guardar
            const encryptedData = this.cryptoService.encryptObject(userData);
            localStorage.setItem('userData', encryptedData);

            if (userData.nit) {
                // Encriptar NIT también
                const encryptedNit = this.cryptoService.encrypt(userData.nit);
                localStorage.setItem('nit', encryptedNit);
            }
        }
    }

    /**
     * Obtiene los datos del usuario almacenados con desencriptación
     */
    getUserData(): any {
        const encryptedData = localStorage.getItem('userData');
        if (!encryptedData) return null;

        // Desencriptar datos
        return this.cryptoService.decryptObject(encryptedData);
    }
}
