import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    // { title: 'Rose', url: 'rose', icon: 'people' },
    // { title: 'Pronostici', url: 'pronostici', icon: 'ice-cream' },
    { title: 'Regolamento', url: 'regolamento', icon: 'skull' },
    { title: 'News', url: 'news', icon: 'notifications-circle' },
  ];
  // public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
