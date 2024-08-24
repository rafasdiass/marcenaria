import { Injectable } from '@angular/core';
import { ProductModel } from '../models/product-model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private kitchenProducts: ProductModel[] = [
    {
      id: '1',
      name: 'Cozinha Completa',
      description: 'Conjunto completo de cozinha planejada',
      pricePerSquareMeter: 300,
      modelPath: 'assets/models/cozinha-completa.obj',
      room: 'kitchen'
    },
    {
      id: '2',
      name: 'Conjunto Superior',
      description: 'Conjunto de armários superiores',
      pricePerSquareMeter: 150,
      modelPath: 'assets/models/conjunto-superior.obj',
      room: 'kitchen'
    },
    {
      id: '3',
      name: 'Conjunto Inferior',
      description: 'Conjunto de armários inferiores',
      pricePerSquareMeter: 180,
      modelPath: 'assets/models/conjunto-inferior.obj',
      room: 'kitchen'
    }
  ];

  private bedroomProducts: ProductModel[] = [
    {
      id: '4',
      name: 'Cama Queen Size',
      description: 'Cama de casal tamanho queen size',
      pricePerSquareMeter: 200,
      modelPath: 'assets/models/cama-queen.obj',
      room: 'bedroom'
    },
    {
      id: '5',
      name: 'Guarda-Roupa',
      description: 'Guarda-roupa com portas de correr',
      pricePerSquareMeter: 220,
      modelPath: 'assets/models/guarda-roupa.obj',
      room: 'bedroom'
    }
  ];

  private bathroomProducts: ProductModel[] = [
    // Produtos do banheiro
  ];

  private livingRoomProducts: ProductModel[] = [
    // Produtos da sala de estar
  ];

  private officeProducts: ProductModel[] = [
    // Produtos do escritório
  ];

  // Métodos para obter produtos específicos de cada cômodo
  getProductsByRoom(room: string): ProductModel[] {
    switch (room.toLowerCase()) {
      case 'kitchen':
        return this.kitchenProducts;
      case 'bedroom':
        return this.bedroomProducts;
      case 'bathroom':
        return this.bathroomProducts;
      case 'living-room':
        return this.livingRoomProducts;
      case 'office':
        return this.officeProducts;
      default:
        return [];
    }
  }

  getProductById(id: string): ProductModel | undefined {
    const allProducts = [
      ...this.kitchenProducts,
      ...this.bedroomProducts,
      ...this.bathroomProducts,
      ...this.livingRoomProducts,
      ...this.officeProducts
    ];
    return allProducts.find(product => product.id === id);
  }
}
