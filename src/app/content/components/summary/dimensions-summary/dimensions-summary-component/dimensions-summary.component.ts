import { Component, Output, EventEmitter, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Measure } from '../../../../shared/models/measure.model';

@Component({
  selector: 'app-dimensions-summary',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './dimensions-summary.component.html',
  styleUrls: ['./dimensions-summary.component.scss']
})
export class DimensionsSummaryComponent {
  @Input() measures: Measure[] = [];  // Array de medidas dinâmicas
  @Output() measuresChange = new EventEmitter<Measure[]>();

  onMeasureUpdate(): void {
    if (this.areValidMeasures()) {
      this.measuresChange.emit(this.measures);
    }
  }

  private areValidMeasures(): boolean {
    return this.measures.every(measure => this.isValidMeasure(measure.value));
  }

  private isValidMeasure(value: number): boolean {
    return value > 0 && !isNaN(value);
  }
}
