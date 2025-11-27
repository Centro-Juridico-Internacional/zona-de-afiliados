import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '@app/components/navbar/navbar';
import { FooterComponent } from '@app/components/footer/footer';

@Component({
    selector: 'app-contacto',
    standalone: true,
    imports: [CommonModule, NavbarComponent, FooterComponent],
    templateUrl: './contacto.html',
    styleUrls: ['./contacto.scss']
})
export class ContactoComponent {

    constructor() { }

}
