import { Injectable } from '@angular/core';

import 'rxjs/add/operator/toPromise';

import { Person, Skill } from '../models/person'

@Injectable()
export class PersonService {

  private persons = [];

  constructor() {
    this.persons.push(new Person("John", "Tiger",
      [new Skill("Walking"), new Skill("Running"), new Skill("Chasing"), new Skill("Rushing", true), new Skill("Crushing"), new Skill("Dashing")]));
    this.persons.push(new Person("Mary", "Fox", [new Skill("Stealing")]));
    this.persons.push(new Person("Fred", "Bear", [new Skill("Eating", true), new Skill("Sleeping")]));
  }

  getPersons(): Promise<Person[]> {
    return Promise.resolve(this.persons);
  }
}