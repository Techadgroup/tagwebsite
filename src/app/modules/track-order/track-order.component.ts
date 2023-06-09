import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { PurchaseRequest } from 'src/app/services/classes/PurchaseRequest';
import { MainHttpService } from 'src/app/services/main-http.service';

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

  constructor(private _service: MainHttpService, private fb: FormBuilder) { 
   
  }

  ngOnInit() {

    document.title= `Track Order`;

    
    this.trackform = this.fb.group({
      orderId: [''],
      status: ['']
 });

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
