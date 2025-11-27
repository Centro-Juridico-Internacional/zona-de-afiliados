import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeServiceNavbarComponent } from '@app/components/home-service-navbar/home-service-navbar';
import { FooterComponent } from '@app/components/footer/footer';

@Component({
    selector: 'app-capacitaciones',
    standalone: true,
    imports: [CommonModule, HomeServiceNavbarComponent, FooterComponent],
    templateUrl: './capacitaciones.html',
    styleUrls: ['./capacitaciones.scss']
})
export class CapacitacionesComponent {

    constructor() { }

}
