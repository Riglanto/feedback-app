import { Component, OnInit } from '@angular/core';

import { Person } from '../models/person';
import { PersonService } from '../services/person.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

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
