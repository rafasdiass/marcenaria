import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-type',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-type.component.html',
  styleUrls: ['./product-type.component.scss']
})
export class ProductTypeComponent {
  productTypes: string[] = ['Cozinha', 'Quarto', 'Banheiro', 'Sala de Estar', 'Escritório'];

  @Output() typeSelected = new EventEmitter<string>();

  onSelectType(type: string): void {
    this.typeSelected.emit(type);
  }
}
