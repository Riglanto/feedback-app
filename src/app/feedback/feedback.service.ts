import { Injectable } from '@angular/core';

import 'rxjs/add/operator/toPromise';

import { FeedbackNote } from './feedback-note'

@Injectable()
export class FeedbackService {

  private feedbacks = [];

  constructor() {
    var fb = new FeedbackNote(
      "Description #1",
      "someones Bug"
    );
    fb.isOwned = false;
    this.feedbacks.push(fb);
    this.feedbacks.push(new FeedbackNote(
      "Description long one long one long one long one long one long one long one long one #2",
      "my CR"
    ));
  }

  getFeedbacks(): Promise<FeedbackNote[]> {
    return Promise.resolve(this.feedbacks);
  }

  addFeedback(feedbackNote) {
    this.feedbacks.push(feedbackNote);
  }

  deleteFeedback(feedbackNote) {
    let index: number = this.feedbacks.indexOf(feedbackNote);
    if (index !== -1) {
        this.feedbacks.splice(index, 1);
    } 
  }

}
