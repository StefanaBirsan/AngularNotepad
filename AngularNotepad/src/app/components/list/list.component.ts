import { Component, OnInit } from '@angular/core';
import { ThoughtsService } from 'src/app/subjects/thoughts.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  thoughtsList = this.thoughts.thoughts;
  existingThoughts: boolean = false;
  constructor(private thoughts: ThoughtsService) {}

  ngOnInit(): void {
    console.log(this.existingThoughts);
    if (this.thoughts.thoughts.length != 0) {
      this.existingThoughts = !this.existingThoughts;
    }
    console.log(this.existingThoughts);
  }
}
