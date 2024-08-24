import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-price-summary',
  standalone: true,
  imports: [CommonModule], // Certifique-se de que CommonModule está importado
  templateUrl: './price-summary.component.html',
  styleUrls: ['./price-summary.component.scss']
})
export class PriceSummaryComponent {
  @Input() totalPrice: number = 0;
}
