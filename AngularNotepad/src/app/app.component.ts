import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'AngularNotepad';
  start: boolean = false;
  startNote() {
    this.start = !this.start;
    console.log(this.start);
  }
}
