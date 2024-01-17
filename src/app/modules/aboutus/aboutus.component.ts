import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';


@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {

  constructor(private metaTagService: Meta, private titleService: Title) { }

  ngOnInit(): void {

    document.title= `The Company`;

    this.titleService.setTitle(document.title);
    this.metaTagService.addTags([
      { name: 'keywords', content: 'About TAG' },
      // { name: 'robots', content: 'index, follow' },
      {
        name: 'description',
        content:
          'The team at Technology Advantage is equipped with a highly developed skillset acquired over decades of experience not only in information and communication technology but also in business processes across a range of industry sectors.'
      },
      { name: 'author', content: 'Therence Amoah' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'date', content: '2024-01-16', scheme: 'YYYY-MM-DD' },
      { charset: 'UTF-8' },
    ]);

  }

}
