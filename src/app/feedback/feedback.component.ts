import { Component, OnInit } from '@angular/core';

import { FeedbackNote } from './feedback-note'

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  feedbacks = [];

  constructor() { }

  ngOnInit() {
    this.feedbacks.push(new FeedbackNote(
      "Description #1",
      "Bug"
    ));
    this.feedbacks.push(new FeedbackNote(
      "Description long one long one long one long one long one long one long one long one #2",
      "CR"
    ));
  }

}
