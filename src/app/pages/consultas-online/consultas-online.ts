import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeServiceNavbarComponent } from '@app/components/home-service-navbar/home-service-navbar';
import { FooterComponent } from '@app/components/footer/footer';

@Component({
    selector: 'app-consultas-online',
    standalone: true,
    imports: [CommonModule, HomeServiceNavbarComponent, FooterComponent],
    templateUrl: './consultas-online.html',
    styleUrls: ['./consultas-online.scss']
})
export class ConsultasOnlineComponent {

    constructor() { }

}
