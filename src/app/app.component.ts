import { Component } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'AuthorQuerySystem';

  ngOnInit(): void {}

  getToolbar() {
    const toolbar = document.getElementById('custom-toolbar');
    return toolbar;
  }
}
