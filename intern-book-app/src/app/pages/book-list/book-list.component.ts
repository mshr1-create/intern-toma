import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  standalone: true,
  selector: 'app-book-list',
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule
  ],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css'
})
export class BookListComponent implements OnInit {
  books: Book[] = []; // 書籍データを格納する配列

  constructor() { }

  ngOnInit(): void {
    // 仮の書籍データ
    this.books = [
      { id: 1, title: 'アンドロイドは電気羊の夢を見るか？', description: '第三次大戦後の未来...', rating: 90 },
      { id: 1, title: '岩田さん：岩田聡はこんなことを話していた。', description: '元任天堂社長の...', rating: 80 },
    ]
  }

  onDeleteBook(bookId: number): void {
    // 指定したIDの書籍を削除
    this.books = this.books.filter(book => book.id !== bookId);
  }

}

// 書籍データを表すインターフェース
export interface Book {
  id: number;
  title: string;
  description: string;
  rating: number;
}
