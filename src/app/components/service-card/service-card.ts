import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-service-card',
  standalone: true,
  imports: [],
  templateUrl: './service-card.html',
  styleUrls: ['./service-card.scss']
})
export class ServiceCardComponent {
  @Input() title!: string;
  @Input() desc!: string;
  @Input() iconClass!: string;
  @Input() link!: string;

  @Output() select = new EventEmitter<string>();

  onSelect() {
    this.select.emit(this.link);
  }
}
