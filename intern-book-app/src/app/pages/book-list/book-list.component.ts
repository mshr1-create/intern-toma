import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { Book } from '../../types/book';
import { BookCardComponent } from '../../components/book-card/book-card.component';
import { BookService } from '../../book.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../../components/confirm-dialog/confirm-dialog.component';
import { MessageService } from '../../message.service';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-book-list',
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    BookCardComponent,
    FormsModule
  ],
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
handleDelete($event: number) {
  throw new Error('Method not implemented.');
}
  books: Book[] = []; // 書籍データを格納する配列
  editingBook: Book | null = null; // 編集する書籍データを格納
  originalBooks: Book[] = []; // 編集前の書籍データを格納

  // BookService, MatDialogを注入
  constructor(
    private bookService: BookService,
    private dialog: MatDialog,
    private messageService: MessageService
  ){ }

  ngOnInit(): void {
    this.bookService.books$.subscribe(books => {
      this.books = books;
      this.originalBooks = [...books];
    });

  }

  isSorted = false; // 並び替え状態を管理するフラグ
  

  // 評価点の高い順に並び替える
  sortByRating(): void{
    this.books = this.books.sort((a, b) => b.rating - a.rating);
  }

  // 元の順序に戻す
  resetOrder(): void {
    this.books = [...this.originalBooks];
  }

  toggleSort(): void {
    if (this.isSorted) {
      this.resetOrder();
    } else {
      this.sortByRating();
    }
    this.isSorted = !this.isSorted; // 並び替え状態を更新
  }

  onDeleteBook(bookId: number): void {
    // 1. ダイアログを開く
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '300px',
    });

    // 2. ダイアログの結果を受け取る
    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        // 削除対象の書籍を取得
        const deletedBook = this.books.find(book => book.id === bookId);

        // 指定したIDの書籍を削除
        this.bookService.deleteBook(bookId);
        // 操作ログを追加
        if (deletedBook) {
        this.messageService.add(`id:${bookId}の「${deletedBook.title}」が削除されました`);
      } else {
        this.messageService.add(`id:${bookId}の書籍が削除されました`);
      }
      }
    });
  }

  // 編集ボタンがクリックされたときの処理
  onEditBook(book: Book): void {
    this.editingBook = { ...book };
  }

  // 保存ボタンがクリックされたときの処理
  saveEdit(): void {
    if(!this.editingBook) return;

    this.bookService.updateBook(this.editingBook);
    this.messageService.add(`id:${this.editingBook.id}の「${this.editingBook.title}」が更新されました`);
  
    // 編集終了
    this.editingBook = null;
  }

  // キャンセルボタンがクリックされたときの処理
  cancelEdit(): void {
    this.editingBook = null;
  }
}
