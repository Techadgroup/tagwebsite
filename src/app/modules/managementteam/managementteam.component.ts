import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';


@Component({
  selector: 'app-managementteam',
  templateUrl: './managementteam.component.html',
  styleUrls: ['./managementteam.component.css']
})
export class ManagementteamComponent implements OnInit {

  constructor(private metaTagService: Meta, private titleService: Title) { }

  ngOnInit(): void {

    document.title = `Management Team`;

    this.titleService.setTitle(document.title);
    this.metaTagService.addTags([
      { name: 'keywords', content: 'CEO for Technology Advantage Group & Management Team' },
      // { name: 'robots', content: 'index, follow' },
      {
        name: 'description',
        content:
          'Ernest Brown leads Technology Advantage Group as the Chief Executive Officer with exceptional experience in the Digital Economy Landscape. He is a seasoned Information Technology Entrepreneur with over 20 years’ experience in the Digital Landscape.'
      },
      { name: 'author', content: 'Therence Amoah' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'date', content: '2024-01-16', scheme: 'YYYY-MM-DD' },
      { charset: 'UTF-8' },
    ]);
  }
  }


