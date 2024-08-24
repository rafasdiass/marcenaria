import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductSummaryComponent } from '../product-summary/product-summary/product-summary.component';
import { DimensionsSummaryComponent } from '../dimensions-summary/dimensions-summary-component/dimensions-summary.component';
import { PriceSummaryComponent } from '../price-summary/price-summary-component/price-summary.component';
import { ProductModel } from '../../../shared/models/product-model';
import { Measure } from '../../../shared/models/measure.model';

@Component({
  selector: 'app-summary',
  standalone: true,
  imports: [CommonModule, ProductSummaryComponent, DimensionsSummaryComponent, PriceSummaryComponent],
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent {
  selectedProduct: ProductModel | undefined;
  measures: Measure[] = [];
  totalPrice: number = 0;

  // Métodos para receber dados de componentes filhos
  onProductSelected(product: ProductModel): void {
    this.selectedProduct = product;
  }

  onDimensionsUpdated(measures: Measure[]): void {
    this.measures = measures;
  }

  onPriceCalculated(price: number): void {
    this.totalPrice = price;
  }
}
