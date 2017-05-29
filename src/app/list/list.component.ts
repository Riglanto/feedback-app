import { Component, OnInit } from '@angular/core';

import { Person } from './person';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  persons = [];

  constructor() { }

  ngOnInit() {
    this.persons.push(new Person("John", "Black"));
    this.persons.push(new Person("Mary", "Red"));
    this.persons.push(new Person("Fred", "White"));
  }

}
