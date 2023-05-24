import { Injectable } from '@angular/core';
import { Author, ChatMessageDto } from './dto/chat-message-dto';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private messages: ChatMessageDto[] = [
    
  ];

  constructor() { }

  public getMessages(): ChatMessageDto[] {
    return this.messages;
  }

  public addMessage(message: ChatMessageDto): void {
    this.messages.push(message);
  }
}
