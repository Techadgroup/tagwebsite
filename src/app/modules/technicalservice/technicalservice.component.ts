import { Component, OnInit } from '@angular/core';
import { NgIf } from '@angular/common';


@Component({
  selector: 'app-technicalservice',
  templateUrl: './technicalservice.component.html',
  styleUrls: ['./technicalservice.component.css'],

})
export class TechnicalserviceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    document.title = 'Technical Services'
  }

}
