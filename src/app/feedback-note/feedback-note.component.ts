import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feedback-note',
  templateUrl: './feedback-note.component.html',
  styleUrls: ['./feedback-note.component.css']
})
export class FeedbackNoteComponent implements OnInit {

  description: string;
  category: string;
  score: number = 1;
  voted: number = 0;

  constructor(description: string, category: string) {
    this.description = description;
    this.category = category;
  }

  getVoteIcon() {
    switch (this.voted) {
      case 1: return "thumb_up";
      case -1: return "thumb_down";
    }
    return "thumbs_up_down";
  }

  getVoteIconColor() {
    switch (this.voted) {
      case 1: return "primary";
      case -1: return "warn";
    }
    return "";
  }

  vote() {
    if (this.voted > 0) {
      this.voted = -1;
      this.score--;
    } else {
      this.voted = 1;
      this.score++;
    }
  }

  getScoreIcon() {
    if (this.score == 0) return "exposure_zero";
    else if (this.score > 0) return "exposure_plus_" + this.score;
    else return "exposure_neg_" + this.score;
  }

  ngOnInit() {
  }

}
