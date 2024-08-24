import { Component, Output, EventEmitter, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dimensions-input',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './dimensions-input.component.html',
  styleUrls: ['./dimensions-input.component.scss']
})
export class DimensionsInputComponent {
  @Input() dimensions = { height: 100, width: 100, depth: 100 };
  @Output() dimensionsChange = new EventEmitter<{ height: number, width: number, depth: number }>();

  onDimensionsUpdate(): void {
    this.dimensionsChange.emit(this.dimensions);
  }
}
