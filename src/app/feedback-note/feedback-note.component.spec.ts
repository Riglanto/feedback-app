import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackNoteComponent } from './feedback-note.component';

describe('FeedbackNoteComponent', () => {
  let component: FeedbackNoteComponent;
  let fixture: ComponentFixture<FeedbackNoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedbackNoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedbackNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
