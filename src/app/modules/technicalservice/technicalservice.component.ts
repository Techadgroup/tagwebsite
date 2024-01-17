import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-technicalservice',
  templateUrl: './technicalservice.component.html',
  styleUrls: ['./technicalservice.component.css'],
})
export class TechnicalserviceComponent implements OnInit {
  constructor(private metaTagService: Meta, private titleService: Title) {}

  ngOnInit() {
    document.title = 'Technical Services';

    this.titleService.setTitle(document.title);
    this.metaTagService.addTags([
      { name: 'keywords', content: 'techadgh' },
      // { name: 'robots', content: 'index, follow' },
      {
        name: 'description',
        content:
          'IT technical services are essential to ensure that our Customers IT infrastructure, applications, and systems are reliable, secure, and performing optimally. By utilizing our different types of IT technical services, our customers are able to minimize the occurrence of technical glitches, downtime, and data security breaches.',
      },
      { name: 'author', content: 'Therence Amoah' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'date', content: '2024-01-16', scheme: 'YYYY-MM-DD' },
      { charset: 'UTF-8' },
    ]);
  }
}
