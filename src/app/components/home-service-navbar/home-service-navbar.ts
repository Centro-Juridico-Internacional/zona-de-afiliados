import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-home-service-navbar',
    standalone: true,
    imports: [RouterModule],
    templateUrl: './home-service-navbar.html',
    styleUrls: ['./home-service-navbar.scss']
})
export class HomeServiceNavbarComponent {
    constructor() { }
}
