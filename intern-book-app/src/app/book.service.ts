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

  // 現在の書籍リストを返すメソッド
  getBooks(): Book[] {
    return this.booksSubject.getValue();
  }

  
  addBook(book: Book): void {
    // 現在の配列を取得
    const currentBooks = this.booksSubject.getValue();
    
    // 現在の書籍データから最大のIDを取得し、空の場合は1をセット
    const newId = currentBooks.length > 0 ? Math.max(...currentBooks.map(b => b.id)) + 1 : 1;
    book.id = newId;
    
    // 新しい書籍を含んだ配列を作り、BehaviorSubjectにセット
    this.booksSubject.next([...currentBooks, book]);
  }

  deleteBook(bookId: number): void {
    const currentBooks = this.booksSubject.getValue();
    this.booksSubject.next(currentBooks.filter(b => b.id !== bookId));
  }

  // 編集機能のメソッド
  updateBook(updateBook: Book): void {
    const currentBooks = this.booksSubject.getValue();
    // idが一致する書籍をupdateBookで置き換える
    const newBooks = currentBooks.map(book => 
      book.id === updateBook.id ? updateBook : book
    );
    this.booksSubject.next(newBooks);
  }
}
