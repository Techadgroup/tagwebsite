import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { PurchaseRequest } from 'src/app/services/classes/PurchaseRequest';
import { MainHttpService } from 'src/app/services/main-http.service';
import { Title,Meta } from '@angular/platform-browser';


@Component({
  selector: 'app-track-order',
  templateUrl: './track-order.component.html',
  styleUrls: ['./track-order.component.css']
})
export class TrackOrderComponent implements OnInit {

  order: PurchaseRequest;
  orderId: string;
  trackform: FormGroup;
  status: string;
  productName: string;
  productQty: number;
  customerName: string;
  msg = "Wrong Order ID";



  constructor(private _service: MainHttpService, private fb: FormBuilder, private metaTagService: Meta,private titleService: Title) { 
   
  }

  ngOnInit() {

    document.title= `Track Order`;

    

    
    this.trackform = this.fb.group({
      orderId: [''],
      status: ['']
 });

 this.titleService.setTitle(document.title);
 this.metaTagService.addTags([
   { name: 'keywords', content: 'techadgh' },
   // { name: 'robots', content: 'index, follow' },
   { name: 'description', content: 'Use Order ID recieved in your mail upon purchase request to keep track of status of your order.'},
   { name: 'author', content: 'Therence Amoah'},
   { name: 'viewport', content: 'width=device-width, initial-scale=1' },
   { name: 'date', content: '2024-01-16', scheme: 'YYYY-MM-DD' },
   { charset: 'UTF-8' }
 ]);


  }

  onSubmit(){

    // console.log(this.trackform.getRawValue().orderId)

    this._service.getOneOrder(this.trackform.getRawValue().orderId).subscribe(
      data =>{
          
            this.order = data;
            this.status = data.status;
            // console.log(this.order);

          
     }),
     error =>{
          //  this.msg = error.error.text;

           if(this.order == null){
              
            this.msg;
          }
     }
    
    }
  

  done():void{
    
    window.location.reload();
    
  }


}
