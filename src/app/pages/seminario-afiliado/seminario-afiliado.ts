import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeServiceNavbarComponent } from '@app/components/home-service-navbar/home-service-navbar';
import { FooterComponent } from '@app/components/footer/footer';

@Component({
    selector: 'app-seminario-afiliado',
    standalone: true,
    imports: [CommonModule, HomeServiceNavbarComponent, FooterComponent],
    templateUrl: './seminario-afiliado.html',
    styleUrls: ['./seminario-afiliado.scss']
})
export class SeminarioAfiliadoComponent {

    constructor() { }

}
