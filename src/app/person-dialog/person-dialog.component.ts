import { Component, Inject } from '@angular/core';

import { MdDialogRef } from '@angular/material';
import { MD_DIALOG_DATA } from '@angular/material';

import { Person, Skill } from '../models/person'

@Component({
  selector: 'app-person-dialog',
  templateUrl: './person-dialog.component.html',
  styleUrls: ['./person-dialog.component.css']
})
export class PersonDialogComponent {

  constructor(public dialogRef: MdDialogRef<PersonDialogComponent>, @Inject(MD_DIALOG_DATA) public person: Person) {
  }

}
