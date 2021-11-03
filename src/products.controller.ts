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
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get()
  getAll(): Product[] {
    return this.productsService.getAll();
  }

  @Get(':id')
  getById(@Param() params): Product {
    return this.productsService.getById(params.id);
  }

  @Post()
  post(@Body() product: Product): void {
    return this.productsService.post(product);
  }

  @Put(':id')
  put(@Body() product: Product, @Param() params): Product {
    return this.productsService.put(params.id, product);
  }

  @Delete(':id')
  delete(@Param() params): void {
    return this.productsService.delete(params.id);
  }
}
