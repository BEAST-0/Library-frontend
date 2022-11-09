import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from './book.model';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  url = 'https://librarybackend007.herokuapp.com/books';
  constructor(private http: HttpClient) {}
  addBook(book: Book) {
    return this.http.post(this.url, book);
  }

  getBookList() {
    return this.http.get<Book[]>(this.url);
  }

  deleteBook(id: any) {
    return this.http.delete(`${this.url}/${id}`);
  }

  updateBook(book: Book) {
    return this.http.put(`${this.url}/${book._id}`, book);
  }
}
