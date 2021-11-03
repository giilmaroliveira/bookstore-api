import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

@Controller('products')
export class ProductsController {
  @Get()
  getAll(): string {
    return 'All products';
  }

  @Get(':id')
  getById(@Param() params): string {
    return `Get product by id ${params.id}`;
  }

  @Post()
  post(@Body() body): string {
    console.log(body);
    return 'Create a new product';
  }

  @Put(':id')
  put(@Body() body, @Param() params): string {
    console.log(body);
    return `Update the product ${params.id}`;
  }

  @Delete(':id')
  delete(@Param() params): string {
    return `Delete the product ${params.id}`;
  }
}
