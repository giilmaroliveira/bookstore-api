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
  async getAll(): Promise<Book[]> {
    return this.booksService.getAll();
  }

  @Get(':id')
  async getById(@Param() params): Promise<Book> {
    return this.booksService.getById(params.id);
  }

  @Post()
  async post(@Body() book: Book) {
    return this.booksService.post(book);
  }

  @Put(':id')
  async put(@Body() book: Book, @Param() params): Promise<[number, Book[]]> {
    return this.booksService.put(params.id, book);
  }

  @Delete(':id')
  async delete(@Param() params) {
    return this.booksService.delete(params.id);
  }
}
