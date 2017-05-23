export class FeedbackNote {

    description: string;
    category: string;
    score: number = 1;
    voted: number = 0;

    constructor(description: string, category: string) {
        this.description = description;
        this.category = category;
    }

    getThumbUpColor() {
        return this.voted == 1 ? "green" : "";
    }

    getThumbDownColor() {
        return this.voted == -1 ? "red" : "";
    }

    voteUp() {
        if (this.voted == 1) {
            this.voted = 0;
        }
        else {
            this.voted = 1;
        }
    }

    voteDown() {
        if (this.voted == -1) {
            this.voted = 0;
        }
        else {
            this.voted = -1;
        }
    }

    getScore() {
        return this.score + this.voted;
    }

    getScoreIcon() {
        if (this.getScore() == 0) return "exposure_zero";
        else if (this.getScore() > 0) return "exposure_plus_" + this.getScore();
        else return "exposure_neg_" + this.getScore();
    }
}
