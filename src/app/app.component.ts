import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'lassila-tikanoja';

  openTab(url: string) {
    let win = window.open(url, '_blank');
    win.focus();
  }
}
