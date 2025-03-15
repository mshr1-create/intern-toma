import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BookRegisterComponent } from './pages/book-register/book-register.component';
import { BookListComponent } from './pages/book-list/book-list.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MessageComponent } from "./components/message/message.component";

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [
    RouterOutlet,
    MatSlideToggleModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    BookRegisterComponent,
    BookListComponent,
    ToolbarComponent,
    MessageComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'intern-book-app';
}
