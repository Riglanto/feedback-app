import { FeedbackAppPage } from './app.po';

describe('feedback-app App', () => {
  let page: FeedbackAppPage;

  beforeEach(() => {
    page = new FeedbackAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
