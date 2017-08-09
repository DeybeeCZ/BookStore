import { Component, OnInit } from '@angular/core';
import { IBook } from '../book';
import { BookService } from '../book.service';


@Component({
  moduleId: module.id,
  selector: 'bs-books-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
  providers:[BookService]
})
export class BookListComponent implements OnInit {

  books: IBook[];
  favoriteMessage: string = '';
  imageWidth: number = 100;
  showImage: boolean = true;
  booksInStock: number = 2;
  errorMessage: string;

  constructor(private _bookService: BookService) { }

  ngOnInit() { this.getBooks() }

  getBooks() {
    this._bookService.getBooks()
      .subscribe(
        books => this.books = books,
        error => this.errorMessage = <any>error,
        () => console.log('los libros',this.books)
      );
  }

  onFavoriteClicked(message: string): void {
    this.favoriteMessage = message;
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

}
