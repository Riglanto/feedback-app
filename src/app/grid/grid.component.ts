import { Component, OnInit } from '@angular/core';

import { Person } from '../models/person';
import { PersonService } from '../services/person.service';
import { HelperService } from '../services/helper.service';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {

  persons = [];

  constructor(private personService: PersonService, private helperService: HelperService) { }

  ngOnInit() {
    this.getPersons();
  }

  getPersons(): void {
    this.personService
      .getPersons()
      .then(persons => this.persons = persons);
  }

  openPersonView(person: Person) {
    this.helperService.openPersonEditDialog(person);
  }
}