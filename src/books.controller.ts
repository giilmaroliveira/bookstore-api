import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Book } from './book.model';
import { BooksService } from './books.service';

@Controller('books')
export class BooksController {
  constructor(private booksService: BooksService) {}

  @Get()
  getAll(): Book[] {
    return this.booksService.getAll();
  }

  @Get(':id')
  getById(@Param() params): Book {
    return this.booksService.getById(params.id);
  }

  @Post()
  post(@Body() book: Book): void {
    return this.booksService.post(book);
  }

  @Put(':id')
  put(@Body() book: Book, @Param() params): Book {
    return this.booksService.put(params.id, book);
  }

  @Delete(':id')
  delete(@Param() params): void {
    return this.booksService.delete(params.id);
  }
}
