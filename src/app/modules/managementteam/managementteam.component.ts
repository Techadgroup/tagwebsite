import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-managementteam',
  templateUrl: './managementteam.component.html',
  styleUrls: ['./managementteam.component.css']
})
export class ManagementteamComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    document.title = `Management Team`;
  }

}
