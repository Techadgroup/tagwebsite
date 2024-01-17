import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';


@Component({
  selector: 'app-mission',
  templateUrl: './mission.component.html',
  styleUrls: ['./mission.component.css']
})
export class MissionComponent implements OnInit {

  constructor(private metaTagService: Meta, private titleService: Title) { }

  ngOnInit() {

    document.title = `Our Mission & Vision`;

    this.titleService.setTitle(document.title);
    this.metaTagService.addTags([
      { name: 'keywords', content: 'Sole distributor of netgate equipment in West Africa!' },
      // { name: 'robots', content: 'index, follow' },
      {
        name: 'description',
        content:
          'Our Mission is to provide the best fully tested products, solutions and partners for our customers.'
      },
      { name: 'author', content: 'Therence Amoah' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'date', content: '2024-01-16', scheme: 'YYYY-MM-DD' },
      { charset: 'UTF-8' },
    ]);
  }

}
