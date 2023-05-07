import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatComponent } from './chat.component';
import { ChatRoutingModule } from './chat-routing.module';
import { NavigationComponent } from './navigation/navigation.component';
import { ContentComponent } from './content/content.component';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    ChatComponent,
    NavigationComponent,
    ContentComponent
  ],
  imports: [
    CommonModule,
    ChatRoutingModule,
    MatIconModule
  ],
  exports: []
})
export class ChatModule { 

}
