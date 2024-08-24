import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../../shared/services/product.service';
import { ProductModel } from '../../../shared/models/product-model';
import { ProductTypeComponent } from '../product-type/product-type/product-type.component';

@Component({
  selector: 'app-product-selection',
  standalone: true,
  imports: [CommonModule, FormsModule, ProductTypeComponent],
  templateUrl: './product-selection.component.html',
  styleUrls: ['./product-selection.component.scss']
})
export class ProductSelectionComponent {
  filteredProducts: ProductModel[] = [];
  selectedProductId: string | undefined;

  @Output() productSelect = new EventEmitter<string>();

  constructor(private productService: ProductService) {}

  onProductTypeSelect(type: string): void {
    this.filteredProducts = this.productService.getProductsByRoom(type);
  }

  onProductChange(): void {
    this.productSelect.emit(this.selectedProductId);
  }
}
