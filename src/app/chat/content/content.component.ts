import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ChatService } from '../chat.service';
import { Author, ChatMessageDto } from '../dto/chat-message-dto';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  
  @ViewChild('scrollContainer', { static: true }) private scrollContainer!: ElementRef;
  
  chatMessages: ChatMessageDto[] = [];
  
  userinput: string = '';
  
  thumbsUp: SafeResourceUrl | undefined;
  thumbsDown: SafeResourceUrl | undefined;
  userLogo: SafeResourceUrl | undefined;
  botLogo: SafeResourceUrl | undefined;

  constructor(private sanitizer: DomSanitizer, private http: HttpClient, private chatService: ChatService) { }

  ngOnInit() {
    const thumbsUpPath = 'assets/icons8-thumbs-up-50.png'; 
    const thumbsDownPath = 'assets/icons8-thumbs-down-50.png'; 

    const userPath = 'assets/icons8-user-48.png'; 
    const bothPath = 'assets/icons8-bot-48.png'; 

    this.thumbsUp = this.sanitizer.bypassSecurityTrustResourceUrl(thumbsUpPath);
    this.thumbsDown = this.sanitizer.bypassSecurityTrustResourceUrl(thumbsDownPath);
    this.userLogo = this.sanitizer.bypassSecurityTrustResourceUrl(userPath);
    this.botLogo = this.sanitizer.bypassSecurityTrustResourceUrl(bothPath);
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

  like(message: ChatMessageDto){
    message.liked = !message.liked
    if(message.unliked == true){
      message.unliked = false;
    }
  }

  unlike(message: ChatMessageDto){
    message.unliked = !message.unliked
    if(message.liked == true){
      message.liked = false;
    }

  }

  private addToMessages(){
    this.chatMessages.push(new ChatMessageDto(Author.User, new Date(),this.userinput))
  }

  scrollToBottom(): void {
    console.log("SCROOLL BOTTOM")
      const container = this.scrollContainer.nativeElement;
      setTimeout(() => {
        container.scrollTop = container.scrollHeight - 500;
        container.scrollIntoView({ behavior: 'smooth', block: 'end' });
      }, 0);
  }

  sendMessageToBackend(message: string) {
    this.http.post('http://localhost:5000/messages', { message: message }).subscribe(
      (response: any) => {
        this.chatMessages.push(new ChatMessageDto(Author.Bot, new Date(),response.text))
        this.scrollToBottom()
      },
      (error: any) => {
        console.error('Error sending message to backend:', error);
      }
    );
  }

}
