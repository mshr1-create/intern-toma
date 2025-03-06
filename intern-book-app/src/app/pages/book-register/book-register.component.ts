import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';;
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BookService } from '../../book.service';
import { Book } from '../../types/book';

@Component({
  standalone : true,
  selector: 'app-book-register',
  imports: [
    FormsModule, 
    MatButton, 
    MatCardModule, 
    MatInputModule, 
    MatFormFieldModule
  ],
  templateUrl: './book-register.component.html',
  styleUrl: './book-register.component.css'
})
export class BookRegisterComponent {
  bookTitle: string = '';
  bookDescription: string = '';
  bookRating: number | null = null;

  constructor(private bookService: BookService) {}
  
  addNewBook(): void {
    // 新しい書籍情報を定義
    const newBook: Book = {
      id: Date.now(), // 現在のタイムスタンプをIDとして使用
      title: this.bookTitle,
      description: this.bookDescription,
      rating: this.bookRating ?? 0
    };

    this.bookService.addBook(newBook);

    // 入力フォームをリセット
    this.bookTitle = '';
    this.bookDescription = '';
    this.bookRating = null;
  } 
}
