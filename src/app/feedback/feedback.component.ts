import { Component, OnInit } from '@angular/core';

import { FeedbackNote } from './feedback-note';
import { FeedbackService } from './feedback.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  isNewFeedback = false;
  feedbackNote = new FeedbackNote("", "");

  private feedbacks = [];

  constructor(private feedbackService: FeedbackService) { }

  ngOnInit() {
    this.getFeedbacks();
  }

  getFeedbacks(): void {
    this.feedbackService
        .getFeedbacks()
        .then(feedbacks => this.feedbacks = feedbacks);
  }

  onSubmit(event) {
    this.feedbackService.addFeedback(this.feedbackNote);
    this.isNewFeedback = false;
    this.feedbackNote = new FeedbackNote("", "");
  }

  onDelete(feedbackNote) {
    this.feedbackService.deleteFeedback(feedbackNote);
  }

}
