import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatComponent } from './chat.component';
import { ChatRoutingModule } from './chat-routing.module';
import { NavigationComponent } from './navigation/navigation.component';
import { ContentComponent } from './content/content.component';



@NgModule({
  declarations: [
    ChatComponent,
    NavigationComponent,
    ContentComponent
  ],
  imports: [
    CommonModule,
    ChatRoutingModule
  ],
  exports: []
})
export class ChatModule { 

}
