import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductConfigurationComponent } from '../../../product-configuration/product-configuration/product-configuration.component';
import { ProductModel } from '../../../../shared/models/product-model';
import { ProductService } from '../../../../shared/services/product.service';

@Component({
  selector: 'app-bedroom',
  standalone: true,
  imports: [CommonModule, ProductConfigurationComponent],
  templateUrl: './bedroom.component.html',
  styleUrls: ['./bedroom.component.scss']
})
export class BedroomComponent {
  selectedProduct: ProductModel | undefined;
  dimensions = { height: 100, width: 100, depth: 100 };

  constructor(private productService: ProductService) {}

  onProductSelect(product: ProductModel): void {
    this.selectedProduct = product;
  }

  onDimensionsChange(dimensions: { height: number, width: number, depth: number }): void {
    this.dimensions = dimensions;
  }
}
