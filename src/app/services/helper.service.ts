import { Injectable } from '@angular/core';
import { Person, Skill } from '../models/person';
import { MdDialog, MdDialogRef } from '@angular/material';
import { PersonDialogComponent } from '../person-dialog/person-dialog.component'

@Injectable()
export class HelperService {

  constructor(public dialog: MdDialog) { }

  openPersonEditDialog(person: Person) {
    let tmpPerson = person.copy();
    let dialogRef = this.dialog.open(PersonDialogComponent, {
      data: tmpPerson,
      disableClose: true,
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result === "Save") {
        Object.assign(person, tmpPerson);
      }
    });
  }

}
