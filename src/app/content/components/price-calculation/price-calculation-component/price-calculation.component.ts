import { Component, Input, OnChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PriceDisplayComponent } from '../price-display/price-display-component/price-display.component';
import { PriceCalculationService } from '../../../shared/services/price-calculation.service';
import { ProductModel } from '../../../shared/models/product-model';
import { Dimensions } from '../../../shared/models/dimensions';

@Component({
  selector: 'app-price-calculation',
  standalone: true,
  imports: [CommonModule, PriceDisplayComponent],
  templateUrl: './price-calculation.component.html',
  styleUrls: ['./price-calculation.component.scss']
})
export class PriceCalculationComponent implements OnChanges {
  @Input() selectedProduct: ProductModel | undefined;
  @Input() dimensions: Dimensions | undefined;
  
  totalPrice: number = 0;

  constructor(private priceCalculationService: PriceCalculationService) {}

  ngOnChanges(): void {
    if (this.selectedProduct && this.dimensions) {
      this.calculatePrice();
    }
  }

  calculatePrice(): void {
    if (this.selectedProduct && this.dimensions) {
      this.totalPrice = this.priceCalculationService.calculatePrice(this.selectedProduct, this.dimensions);
    }
  }
}
