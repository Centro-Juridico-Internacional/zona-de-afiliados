import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeServiceNavbarComponent } from '@app/components/home-service-navbar/home-service-navbar';
import { FooterComponent } from '@app/components/footer/footer';

@Component({
    selector: 'app-workshop-afiliados',
    standalone: true,
    imports: [CommonModule, HomeServiceNavbarComponent, FooterComponent],
    templateUrl: './workshop-afiliados.html',
    styleUrls: ['./workshop-afiliados.scss']
})
export class WorkshopAfiliadosComponent {

    constructor() { }

}
