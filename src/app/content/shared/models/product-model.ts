export interface ProductModel {
    id: string;
    name: string;
    description: string;
    pricePerSquareMeter: number;
    modelPath: string;
    room: string;  // Adiciona uma propriedade para indicar o cômodo (ex: cozinha, quarto)
  }
  