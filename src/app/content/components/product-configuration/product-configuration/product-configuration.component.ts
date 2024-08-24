import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DimensionsInputComponent } from '../dimensions-input/dimensions-input-component/dimensions-input.component';
import { ModelViewerComponent } from '../model-viewer/model-viewer/model-viewer.component';
import { ProductModel } from '../../../shared/models/product-model';
import { ProductService } from '../../../shared/services/product.service';

@Component({
  selector: 'app-product-configuration',
  standalone: true,
  imports: [CommonModule, DimensionsInputComponent, ModelViewerComponent],
  templateUrl: './product-configuration.component.html',
  styleUrls: ['./product-configuration.component.scss']
})
export class ProductConfigurationComponent implements OnInit {
  products: ProductModel[] = [];

  @Input() selectedProduct: ProductModel | undefined;
  @Input() dimensions = { height: 100, width: 100, depth: 100 };
  @Input() roomType: string = '';  // Adiciona uma entrada para o tipo de cômodo

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.loadProductsByRoom(); // Carregar os produtos específicos do cômodo
  }

  loadProductsByRoom(): void {
    this.products = this.productService.getProductsByRoom(this.roomType);
  }

  onDimensionsChange(newDimensions: { height: number, width: number, depth: number }): void {
    this.dimensions = newDimensions;
  }

  onProductSelect(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    const productId = selectElement.value;
    this.selectedProduct = this.productService.getProductById(productId);
  }
}
