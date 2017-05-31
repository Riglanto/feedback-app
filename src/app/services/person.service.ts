import { Injectable } from '@angular/core';

import 'rxjs/add/operator/toPromise';

import { Person } from '../models/person'

@Injectable()
export class PersonService {

  private persons = [];

  constructor() {
    this.persons.push(new Person("John", "Tiger"));
    this.persons.push(new Person("Mary", "Fox"));
    this.persons.push(new Person("Fred", "Bear"));
  }

  getPersons(): Promise<Person[]> {
    return Promise.resolve(this.persons);
  }
}