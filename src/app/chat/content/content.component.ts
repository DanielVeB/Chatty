import { Component, OnInit } from '@angular/core';
import { ChatService } from '../chat.service';
import { ChatMessageDto } from '../dto/chat-message-dto';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  chatMessages: ChatMessageDto[] = [];

  constructor(private chatService: ChatService) { }

  ngOnInit() {
    this.chatMessages = this.chatService.getMessages();
    console.log(this.chatMessages)
  }

}
