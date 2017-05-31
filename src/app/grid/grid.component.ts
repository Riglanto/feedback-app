import { Component, OnInit } from '@angular/core';

import { Person } from '../models/person';
import { PersonService } from '../services/person.service';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {

  persons = [];

  constructor(private personService: PersonService) { }

  ngOnInit() {
    this.getPersons();
  }

  getPersons(): void {
    this.personService
      .getPersons()
      .then(persons => this.persons = persons);
  }
}