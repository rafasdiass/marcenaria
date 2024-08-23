import { ProductModel } from "./product-model";
import { Dimensions } from "./dimensions";
export interface OrderSummary {
    products: ProductModel []; // Produto selecionado
    dimensions: Dimensions;     // Dimensões do produto
    totalPrice: number;         // Preço total calculado
  }
  