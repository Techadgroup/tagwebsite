import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';


@Component({
  selector: 'app-tagservices',
  templateUrl: './tagservices.component.html',
  styleUrls: ['./tagservices.component.css']
})
export class TagservicesComponent implements OnInit {

  constructor(private metaTagService: Meta, private titleService: Title) { }

  ngOnInit() {


    document.title = `Consultancy Services`;

    this.titleService.setTitle(document.title);
    this.metaTagService.addTags([
      { name: 'keywords', content: 'netgate' },
      // { name: 'robots', content: 'index, follow' },
      {
        name: 'description',
        content:
          'Benefit from our expertise to find the right solution to your challenges and make IT work. We make sure everything we do is designed to answer your specific business needs, from small teams to national organizations.'
      },
      { name: 'author', content: 'Therence Amoah' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'date', content: '2024-01-16', scheme: 'YYYY-MM-DD' },
      { charset: 'UTF-8' },
    ]);

  }

}
