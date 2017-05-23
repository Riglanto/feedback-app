import { Component, OnInit } from '@angular/core';

import { FeedbackNoteComponent } from '../feedback-note/feedback-note.component';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  feedbacks = [];

  constructor() { }

  ngOnInit() {
    this.feedbacks.push(new FeedbackNoteComponent(
      "Description #1",
      "Bug"
    ));
    this.feedbacks.push(new FeedbackNoteComponent(
      "Description long one long one long one long one long one long one long one long one #2",
      "CR"
    ));
  }

}
