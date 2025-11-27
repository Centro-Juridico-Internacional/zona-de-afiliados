import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-module-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './module-card.html',
  styleUrls: ['./module-card.scss']
})
export class ModuleCardComponent {
  @Input() title = '';
  @Input() desc = '';
  @Input() img = '';
}
