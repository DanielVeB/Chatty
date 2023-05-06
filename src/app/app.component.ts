import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'chatty';

  showMain: boolean = true;
  showAdmin: boolean = false;
  showUser: boolean = false;
  showChat: boolean = true;
}
