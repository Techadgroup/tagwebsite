import { Component, OnInit } from '@angular/core';
import { Title,Meta } from '@angular/platform-browser';


@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.css']
})
export class PartnersComponent implements OnInit {
  title = 'TAG - Partners'

  constructor(private metaTagService: Meta,private titleService: Title) { }

  ngOnInit() {

    this.titleService.setTitle(this.title);
    this.metaTagService.addTags([
      { name: 'keywords', content: 'TAG Partners' },
      // { name: 'robots', content: 'index, follow' },
      { name: 'description', content: 'One of our main priorities is to build a network of a very distinguished partners. TAG is partnering with big international and regional partners with different products portfolio that empowers us to      provide the best customized offerings that fit our customers varied requirements'},
      { name: 'author', content: 'Therence Amoah'},
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'date', content: '2024-01-16', scheme: 'YYYY-MM-DD' },
      { charset: 'UTF-8' }
    ]);

    

  }

}
