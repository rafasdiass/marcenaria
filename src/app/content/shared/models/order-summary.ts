import { ProductModel } from "./product-model";
import { Dimensions } from "./dimensions";

export interface OrderSummary {
  products: ProductModel[]; // Produtos selecionados
  dimensions: Dimensions;   // Dimensões do produto
  totalPrice: number;       // Preço total calculado
}