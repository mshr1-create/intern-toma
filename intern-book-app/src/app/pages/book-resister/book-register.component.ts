import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';;
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

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
  styleUrls: ['./book-register.component.css']
})
export class BookRegisterComponent {
  bookTitle: string = '';
  bookDescription: string = '';
  bookRating: number | null = null;

  onAddBook(): void {

  }
}
