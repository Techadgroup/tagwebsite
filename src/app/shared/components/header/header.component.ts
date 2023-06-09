import { Component, HostListener, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private modalService: NgbModal,) { }

  navbarfixed: boolean = false;
  
   toggleButton = document.getElementsByClassName('navbar-toggle')[0];
   logoImg = document.getElementsByClassName('logo')[0];


  @HostListener('window:scroll', ['$event']) onscroll(){
      if(window.scrollY > 5){
        this.navbarfixed = true;


      }
      else{

        this.navbarfixed = false;


      }

      
  }


  ngOnInit() {

    
  
  }



  openPop(targetModal) {
    
    this.modalService.open(targetModal,{
      // backdrop: 'static',
      size: 'sm',
      centered: true
    });

  }

  }

  
 
  


