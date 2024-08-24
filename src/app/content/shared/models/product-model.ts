export interface ProductModel {
  id: string;
  name: string;
  description: string;
  pricePerSquareMeter: number;
  modelPath: string;
  room: string;  // Indica o cômodo ao qual o produto pertence (ex: cozinha, quarto)
}