import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeServiceNavbarComponent } from '@app/components/home-service-navbar/home-service-navbar';
import { FooterComponent } from '@app/components/footer/footer';

@Component({
    selector: 'app-diplomados',
    standalone: true,
    imports: [CommonModule, HomeServiceNavbarComponent, FooterComponent],
    templateUrl: './diplomados.html',
    styleUrls: ['./diplomados.scss']
})
export class DiplomadosComponent {

    constructor() { }

}
