import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Blog } from 'src/app/services/classes/Blog';
import { MainHttpService } from 'src/app/services/main-http.service';

@Component({
  selector: 'app-blogdetails',
  templateUrl: './blogdetails.component.html',
  styleUrls: ['./blogdetails.component.css']
})
export class BlogdetailsComponent implements OnInit {
  blog: Blog;

  constructor(private _service: MainHttpService, private _route: ActivatedRoute) { }

  ngOnInit() {

    document.title = `Blog Details`;


    const id = this._route.snapshot.params['id'];

    this._service.getOneBlog(id).subscribe(
      data => {
        this.blog = data;

        // console.log(data)
      }
    );
  }


}
