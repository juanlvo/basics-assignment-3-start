import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  password = '****';
  messages = [];
  numberOfMessage = 0;

  onClickDetails() {
    if (this.password == '****') {
      this.password = 'tuna';
      this.messages.push(new Date());
    } else {
      this.password = '****';
      this.messages.push(new Date());
    }
    this.numberOfMessage++;
  }

  getColorBackground(message) {
    if (message >= 5) {
      return 'blue';
    } else {
      return 'white';
    }
  }

  getMessageColor(message) {
    if (message >= 5) {
      return true;
    } else {
      return false;
    }
  }
}
