import { Component } from '@angular/core';
import { MessageService } from '../../message.service';
import { NgIf, NgFor } from '@angular/common';

@Component({
  selector: 'app-message',
  imports: [
    NgIf,
    NgFor
  ],
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent {
  constructor(public messageService: MessageService) { }

}
