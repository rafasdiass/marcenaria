import { Injectable } from '@angular/core';
import { ProductModel } from '../models/product-model';
import { Dimensions } from '../models/dimensions';

@Injectable({
  providedIn: 'root'
})
export class PriceCalculationService {

  calculatePrice(product: ProductModel, dimensions: Dimensions): number {
    // Calcula a área do produto
    const area = dimensions.height * dimensions.width;

    // Calcula o preço total multiplicando a área pelo preço por metro quadrado do produto
    return area * product.pricePerSquareMeter;
  }
}
