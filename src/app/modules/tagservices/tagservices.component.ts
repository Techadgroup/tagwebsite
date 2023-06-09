import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tagservices',
  templateUrl: './tagservices.component.html',
  styleUrls: ['./tagservices.component.css']
})
export class TagservicesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {


    document.title = `Consultancy Services`;

  }

}
