import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '@app/components/navbar/navbar';
import { FooterComponent } from '@app/components/footer/footer';

@Component({
    selector: 'app-servicios',
    standalone: true,
    imports: [CommonModule, NavbarComponent, FooterComponent],
    templateUrl: './servicios.html',
    styleUrls: ['./servicios.scss']
})
export class ServiciosComponent {

    constructor() { }

}
