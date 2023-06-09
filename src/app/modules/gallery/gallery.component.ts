import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { Gallery } from 'src/app/services/classes/Gallery';
import { MainHttpService } from 'src/app/services/main-http.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  pictures: Gallery[];
  selected: string;

  constructor(private _service: MainHttpService, private modalService: NgbModal, config: NgbModalConfig,  private _route: ActivatedRoute) {
    // config.backdrop = '';

   }

  ngOnInit(){

    const id = this._route.snapshot.params['id'];

// console.log(id)
    this._service.getAlbumImages(id).subscribe(
      res=>{
        this.pictures = res;

        // console.log(this.pictures)
      }
    )

    document.title= `Gallery`;

  }


  open(content, picture: Gallery){

  this.selected = picture.imageUrl;
    
    
    this.modalService.open(content);


  }

}
