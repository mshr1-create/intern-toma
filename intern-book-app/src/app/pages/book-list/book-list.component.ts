import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { Book } from '../../types/book';
import { BookCardComponent } from '../../components/book-card/book-card.component';
import { BookService } from '../../book.service';

@Component({
  standalone: true,
  selector: 'app-book-list',
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    BookCardComponent,
  ],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css'
})
export class BookListComponent implements OnInit {
handleDelete($event: number) {
  throw new Error('Method not implemented.');
}
  books: Book[] = []; // 書籍データを格納する配列

  // BookService を注入
  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.bookService.books$.subscribe(books => this.books = books)
  }

  onDeleteBook(bookId: number): void {
    // 指定したIDの書籍を削除
    this.bookService.deleteBook(bookId);
  }

}
