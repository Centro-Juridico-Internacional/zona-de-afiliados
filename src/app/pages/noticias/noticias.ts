import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '@app/components/navbar/navbar';
import { FooterComponent } from '@app/components/footer/footer';

@Component({
    selector: 'app-noticias',
    standalone: true,
    imports: [CommonModule, NavbarComponent, FooterComponent],
    templateUrl: './noticias.html',
    styleUrls: ['./noticias.scss']
})
export class NoticiasComponent {

    constructor() { }

}
