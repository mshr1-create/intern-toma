import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Book } from '../../types/book';
import { MatCardModule } from '@angular/material/card';

@Component({
  standalone: true,
  selector: 'app-book-card',
  imports: [MatCardModule],
  templateUrl: './book-card.component.html',
  styleUrl: './book-card.component.css'
})
export class BookCardComponent {
  // 書籍データを受け取る
  @Input() book!: Book;

  @Output() deleteRequest = new EventEmitter<number>();
  @Output() editRequest = new EventEmitter<Book>(); // 編集リクエストを送信

  // 削除ボタンがクリックされたときの処理
  handleDelete(): void {
    this.deleteRequest.emit(this.book.id);
  }

  handleEdit(): void {
    this.editRequest.emit(this.book);
  }

}
