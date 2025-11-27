import { Injectable } from '@angular/core';

/**
 * Servicio para encriptar y desencriptar datos sensibles
 * Usado principalmente para proteger datos en localStorage
 */
@Injectable({
    providedIn: 'root'
})
export class CryptoService {
    private readonly SECRET_KEY = 'zona-afiliados-cji-2024';

    /**
     * Encripta una cadena de texto usando Base64 y ofuscación simple
     */
    encrypt(data: string): string {
        if (!data) return '';

        try {
            // Agregar clave secreta al inicio
            const combined = this.SECRET_KEY + data;
            // Convertir a Base64
            const encoded = btoa(combined);
            // Invertir la cadena para ofuscación adicional
            return encoded.split('').reverse().join('');
        } catch (error) {
            console.error('Error al encriptar:', error);
            return data;
        }
    }

    /**
     * Desencripta una cadena previamente encriptada
     */
    decrypt(encryptedData: string): string {
        if (!encryptedData) return '';

        try {
            // Invertir la cadena
            const reversed = encryptedData.split('').reverse().join('');
            // Decodificar Base64
            const decoded = atob(reversed);
            // Remover clave secreta
            if (decoded.startsWith(this.SECRET_KEY)) {
                return decoded.substring(this.SECRET_KEY.length);
            }
            return decoded;
        } catch (error) {
            console.error('Error al desencriptar:', error);
            return '';
        }
    }

    /**
     * Encripta un objeto convirtiéndolo a JSON
     */
    encryptObject(obj: any): string {
        const jsonString = JSON.stringify(obj);
        return this.encrypt(jsonString);
    }

    /**
     * Desencripta y parsea un objeto JSON
     */
    decryptObject(encryptedData: string): any {
        const decrypted = this.decrypt(encryptedData);
        if (!decrypted) return null;

        try {
            return JSON.parse(decrypted);
        } catch (error) {
            console.error('Error al parsear objeto desencriptado:', error);
            return null;
        }
    }
}
