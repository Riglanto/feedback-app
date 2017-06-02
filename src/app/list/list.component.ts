import { Component, OnInit } from '@angular/core';

import { Person } from '../models/person';
import { PersonService } from '../services/person.service';
import { HelperService } from '../services/helper.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  persons = [];

  constructor(private personService: PersonService, private helperService: HelperService) { }

  ngOnInit() {
    this.getPersons();
  }

  openPersonView(person: Person) {
    this.helperService.openPersonEditDialog(person);
  }

  getPersons(): void {
    this.personService
      .getPersons()
      .then(persons => this.persons = persons);
  }
}
