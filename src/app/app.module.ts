import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { FeedbackService } from './services/feedback.service';
import { PersonService } from './services/person.service';
import { HelperService } from './services/helper.service';

import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FlexLayoutModule } from '@angular/flex-layout';
import { ListComponent } from './list/list.component';
import { GridComponent } from './grid/grid.component';
import { PersonDialogComponent } from './person-dialog/person-dialog.component';

const appRoutes: Routes = [
  {
    path: 'feedbacks',
    component: FeedbackComponent
  },
  {
    path: 'list',
    component: ListComponent,
  },
  {
    path: 'grid',
    component: GridComponent,
  },
  {
    path: '',
    redirectTo: '/feedbacks',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    FeedbackComponent,
    ListComponent,
    GridComponent,
    PersonDialogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    RouterModule.forRoot(appRoutes)
  ],
  entryComponents: [
    PersonDialogComponent
  ],
  providers: [FeedbackService, PersonService, HelperService],
  bootstrap: [AppComponent]
})
export class AppModule { }
