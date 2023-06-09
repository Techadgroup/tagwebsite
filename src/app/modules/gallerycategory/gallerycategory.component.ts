import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GalleryCategory } from 'src/app/services/classes/GalleryCategory';
import { MainHttpService } from 'src/app/services/main-http.service';

@Component({
  selector: 'app-gallerycategory',
  templateUrl: './gallerycategory.component.html',
  styleUrls: ['./gallerycategory.component.css']
})
export class GallerycategoryComponent implements OnInit {
    album : GalleryCategory[];

  constructor(private _service: MainHttpService,  private _router: Router) { }

  ngOnInit(){

    this._service.getAlbum().subscribe(
      res =>{
                this.album = res;

      }
    );

    document.title= `Album`;

  }

  onClick(category: string){
    this._router.navigate(['/gallery', category]);
  }

}
