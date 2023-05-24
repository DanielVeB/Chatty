import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ChatService } from '../chat.service';
import { Author, ChatMessageDto } from '../dto/chat-message-dto';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  
  @ViewChild('scrollContainer') private scrollContainer!: ElementRef;

  chatMessages: ChatMessageDto[] = [];
  
  userinput: string = '';
  

  constructor(private http: HttpClient, private chatService: ChatService) { }

  ngOnInit() {
    this.chatMessages = this.chatService.getMessages();
    console.log(this.chatMessages)
  }

  send() {
    console.log("Send " + this.userinput)
    this.addToMessages()
    this.sendMessageToBackend(this.userinput)
    this.userinput = '';

    this.scrollToBottom()

  }

  private addToMessages(){
    this.chatMessages.push(new ChatMessageDto(Author.User, new Date(),this.userinput))
  }

  scrollToBottom(): void {
    try {
      setTimeout(() => {
        this.scrollContainer.nativeElement.scrollTop = this.scrollContainer.nativeElement.scrollHeight;
      }, 0);
    } catch (err) {
      console.log(err);
    }
  }

  sendMessageToBackend(message: string) {
    this.http.post('http://localhost:3000/messages', { message: message }).subscribe(
      (response: any) => {
        this.chatMessages.push(new ChatMessageDto(Author.Bot, new Date(),response.text))
      },
      (error: any) => {
        console.error('Error sending message to backend:', error);
      }
    );
  }

}
