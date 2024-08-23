import { Injectable } from '@angular/core';
import { ProductModel } from '../models/product-model';
import { Measure } from '../models/measure.model';
import { OrderSummary } from '../models/order-summary';
import { PriceCalculationService } from './price-calculation.service';

@Injectable({
  providedIn: 'root'
})
export class OrderSummaryService {

  constructor(private priceCalculationService: PriceCalculationService) {}

  generateSummary(products: ProductModel[], measures: Measure[]): OrderSummary {
    const totalPrice = products.reduce((sum, product) => {
      const dimensions = this.mapMeasuresToDimensions(measures);
      return sum + this.priceCalculationService.calculatePrice(product, dimensions);
    }, 0);

    return {
      products, 
      dimensions: this.mapMeasuresToDimensions(measures),
      totalPrice
    };
  }

  private mapMeasuresToDimensions(measures: Measure[]): { height: number, width: number, depth: number } {
    // Mapeia as medidas para o formato de dimensões esperado
    const height = measures.find(m => m.label.toLowerCase().includes('altura'))?.value || 0;
    const width = measures.find(m => m.label.toLowerCase().includes('largura'))?.value || 0;
    const depth = measures.find(m => m.label.toLowerCase().includes('profundidade'))?.value || 0;

    return { height, width, depth };
  }
}
