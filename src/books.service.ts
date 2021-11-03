import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Book } from './book.model';

@Injectable()
export class BooksService {
  constructor(
    @InjectModel(Book)
    private bookModel: typeof Book,
  ) {}

  async getAll(): Promise<Book[]> {
    return this.bookModel.findAll();
  }

  async getById(id: number): Promise<Book> {
    return this.bookModel.findByPk(id);
  }

  async post(book: Book) {
    this.bookModel.create(book);
  }

  async put(id: number, book: Book): Promise<[number, Book[]]> {
    return this.bookModel.update(book, {
      where: {
        id: id,
      },
    });
  }

  async delete(id: number) {
    const book: Book = await this.getById(id);
    book.destroy();
  }
}
