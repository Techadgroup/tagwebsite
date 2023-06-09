import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private modalService: NgbModal, config: NgbModalConfig,) {
    // config.backdrop = 'static';
    config.size = 'lg';

   }

  ngOnInit() {

  }

  open(content) {
    this.modalService.open(content);

    document.title= `Privacy Policy`;

  }

}
