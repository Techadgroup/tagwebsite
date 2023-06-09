import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Blog } from 'src/app/services/classes/Blog';
import { MainHttpService } from 'src/app/services/main-http.service';

@Component({
  selector: 'app-blogcsr',
  templateUrl: './blogcsr.component.html',
  styleUrls: ['./blogcsr.component.css']
})
export class BlogcsrComponent implements OnInit {
  blogs: Blog[];
  p: number = 1;
  title: string;

  constructor(private _service: MainHttpService, private _router: Router) { }

  ngOnInit() {

    this._service.getAllBlogs("csr").subscribe(
      res=>{
            this.blogs = res;
      }
    )

    document.title= `News & Events`;


  }


  SearchName() {
    if (this.title == "") {
      this.ngOnInit();
    } else {
      this.blogs = this.blogs.filter(res => {
        return res.title.toLocaleLowerCase().match(this.title.toLocaleLowerCase());
      });
    }
  }

  
  onClick(id: string){
    this._router.navigate(['/blog-detail', id]);
  }


}
