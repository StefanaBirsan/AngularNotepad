import { Component, OnInit } from '@angular/core';
import { ThoughtsService } from 'src/app/subjects/thoughts.service';
import { thought } from 'src/app/Interfaces/thought';

@Component({
  selector: 'app-thoughts',
  templateUrl: './thoughts.component.html',
  styleUrls: ['./thoughts.component.css'],
})
export class ThoughtsComponent implements OnInit {
  subject: String = '';
  thought: String = '';
  thoughtCreation: thought = {
    subject: '',
    thoughtText: '',
  };
  add() {
    console.log(this.subject);
    console.log(this.thought);
    this.thoughtCreation = {
      subject: this.subject,
      thoughtText: this.thought,
    };
    this.thoughts.add(this.thoughtCreation);
    console.log(this.thoughts.thoughts);
    this.subject = '';
    this.thought = '';
  }
  reset() {
    this.subject = '';
    this.thought = '';
  }

  constructor(private thoughts: ThoughtsService) {}

  ngOnInit(): void {}
}
