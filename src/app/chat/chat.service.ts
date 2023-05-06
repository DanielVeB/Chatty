import { Injectable } from '@angular/core';
import { Author, ChatMessageDto } from './dto/chat-message-dto';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private messages: ChatMessageDto[] = [
    {
      author: Author.Bot,
      text: "Hi there! I'm a chat bot. How can I assist you today?",
      date: new Date()
    },
    {
      author: Author.User,
      text: "Hi, I have a question about your product",
      date: new Date()
    },
    {
      author: Author.Bot,
      text: "Sure thing! What would you like to know?",
      date: new Date()
    },
    {
      author: Author.User,
      text: "How much does it cost?",
      date: new Date()
    },
    {
      author: Author.Bot,
      text: "The price depends on the product you're interested in. Could you tell me which product you're considering?",
      date: new Date()
    }
  ];

  constructor() { }

  public getMessages(): ChatMessageDto[] {
    return this.messages;
  }

  public addMessage(message: ChatMessageDto): void {
    this.messages.push(message);
  }
}
