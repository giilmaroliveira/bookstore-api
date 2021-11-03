import { Injectable } from '@nestjs/common';
import { Book } from './book.model';

@Injectable()
export class BooksService {
  books: Book[] = [
    new Book('BOOK001', 'TDD e BDD na prática', 29.9),
    new Book('BOOK002', 'Iniciando com Flutter', 39.9),
    new Book('BOOK003', 'Inteligência artificial como serviço', 29.9),
  ];

  getAll(): Book[] {
    return this.books;
  }

  getById(id: number): Book {
    return this.books[0];
  }

  post(book: Book): void {
    this.books.push(book);
  }

  put(id: number, book: Book): Book {
    return book;
  }

  delete(id: number): void {
    this.books.pop();
  }
}
