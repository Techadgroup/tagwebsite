import { Component, OnInit } from '@angular/core';
import { Faq } from 'src/app/services/classes/Faq';
import { MainHttpService } from 'src/app/services/main-http.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {
   faqs: Faq[];
   p: number = 1;

  constructor(private _service: MainHttpService) { }


  ngOnInit() {

    this._service.getFAQs().subscribe(
      res=>{
             this.faqs = res;

            //  console.log(res)
      }
    )

    document.title= `FAQs`;

  }

}
