import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Product } from './product.model';

@Controller('products')
export class ProductsController {
  products: Product[] = [
    new Product('BOOK001', 'TDD e BDD na prática', 29.9),
    new Product('BOOK002', 'Iniciando com Flutter', 39.9),
    new Product('BOOK003', 'Inteligência artificial como serviço', 29.9),
  ];

  @Get()
  getAll(): Product[] {
    return this.products;
  }

  @Get(':id')
  getById(@Param() params): Product {
    return this.products[0];
  }

  @Post()
  post(@Body() product: Product): void {
    product.id = 1;
    this.products.push(product);
  }

  @Put(':id')
  put(@Body() product: Product, @Param() params): Product {
    return product;
  }

  @Delete(':id')
  delete(@Param() params): void {
    this.products.pop();
  }
}
