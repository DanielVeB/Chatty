import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatComponent } from './chat.component';
import { ChatRoutingModule } from './chat-routing.module';
import { NavigationComponent } from './navigation/navigation.component';
import { ContentComponent } from './content/content.component';
import { MatIconModule } from '@angular/material/icon';
import { ResizableTextAreaDirective } from './resizable.textarea.directive';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    ChatComponent,
    NavigationComponent,
    ContentComponent,
    ResizableTextAreaDirective
  ],
  imports: [
    CommonModule,
    ChatRoutingModule,
    MatIconModule,
    FormsModule,
    HttpClientModule
  ],
  exports: []
})
export class ChatModule { 

}
