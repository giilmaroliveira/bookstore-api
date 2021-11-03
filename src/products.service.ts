import { Injectable } from '@nestjs/common';
import { Product } from './product.model';

@Injectable()
export class ProductsService {
  products: Product[] = [
    new Product('BOOK001', 'TDD e BDD na prática', 29.9),
    new Product('BOOK002', 'Iniciando com Flutter', 39.9),
    new Product('BOOK003', 'Inteligência artificial como serviço', 29.9),
  ];

  getAll(): Product[] {
    return this.products;
  }

  getById(id: number): Product {
    return this.products[0];
  }

  post(product: Product): void {
    this.products.push(product);
  }

  put(id: number, product: Product): Product {
    return product;
  }

  delete(id: number): void {
    this.products.pop();
  }
}
