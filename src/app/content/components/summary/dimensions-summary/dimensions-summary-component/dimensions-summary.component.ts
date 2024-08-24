import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Measure } from '../../../../shared/models/measure.model';

@Component({
  selector: 'app-dimensions-summary',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dimensions-summary.component.html',
  styleUrls: ['./dimensions-summary.component.scss']
})
export class DimensionsSummaryComponent {
  @Input() measures: Measure[] = [];  // Array de medidas dinâmicas
}
