import { Component, OnInit } from '@angular/core';

import { FeedbackNote } from '../models/feedback-note';
import { FeedbackService } from '../services/feedback.service';

import {MdSnackBar} from '@angular/material';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  isNewFeedback = false;
  feedbackNote = new FeedbackNote("", "");

  feedbacks = [];

  constructor(private feedbackService: FeedbackService, private confirmBar: MdSnackBar) { }

  ngOnInit() {
    this.getFeedbacks();
  }
  
  openConfirmationBar() {
    this.confirmBar.open("Feedback added", "OK", {
      duration: 2000,
    });
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
    this.openConfirmationBar();
  }

  onDelete(feedbackNote) {
    this.feedbackService.deleteFeedback(feedbackNote);
  }

  // TODO: [RIG] Bad workaround - to be investigated
  // could be moved into ngAfterViewInit or similar
  openNewFeedback() {
    this.isNewFeedback = true;
    setTimeout(x => {
      window.scrollTo(0, document.body.scrollHeight);
      document.getElementById("description").focus();
    }, 0);

  }
}