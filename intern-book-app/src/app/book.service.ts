import { Injectable } from '@angular/core';
import { Book } from './types/book';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  // 書籍データを格納する BehaviorSubject(クラス内部のみでの使用のためprivateを使用)
  private booksSubject = new BehaviorSubject<Book[]>([]);
  books$ = this.booksSubject.asObservable();

  constructor() {
    // 仮の書籍データ
    const initialBooks: Book[] = [
      { id: 1, title: 'アンドロイドは電気羊の夢を見るか？', description: '第三次大戦後の未来...', rating: 90 },
      { id: 2, title: '岩田さん：岩田聡はこんなことを話していた。', description: '元任天堂社長の...', rating: 80 },
    ];
    this.booksSubject.next(initialBooks);
  }

  
  addBook(book: Book): void {
    const currentBooks = this.booksSubject.getValue();
    this.booksSubject.next([...currentBooks, book]);
  }
}
