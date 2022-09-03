import { Injectable } from '@angular/core';
import { thought } from '../Interfaces/thought';

@Injectable({
  providedIn: 'root',
})
export class ThoughtsService {
  thoughts: thought[] = [];
  add(thought: thought) {
    this.thoughts.push(thought);
  }
  constructor() {}
}
