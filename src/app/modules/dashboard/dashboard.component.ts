import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Netgate } from 'src/app/services/classes/Netgate';
import { MainHttpService } from 'src/app/services/main-http.service';
// import { AnimateOnScrollModule } from 'ng2-animate-on-scroll';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  devices: Netgate[];
  spec: Netgate;
  name: string;
  form: FormGroup;

  constructor(private _service: MainHttpService, private fb: FormBuilder, private modalService: NgbModal) { }

  hasAppeared : boolean = false;


  onAppear(){
    this.hasAppeared = true;
  }

  ngOnInit() {

    // get list of netgate products
    this._service.getNetGateDevices().subscribe(
      data => {
        this.devices = data;
        // console.log(this.devices)
      }
    );

    this.form = this.fb.group({
      customerName: [''],
      customerEmail: [''],
      customerphone: [''],
      productName: [''],
       agreed:['', Validators.required],
      status: [''],
      productQty: [''],
      createdAt: [''],
      companyName: [''],
    });

      document.title= `Home`;

  }

  open(content) {
    this.modalService.open(content);

    document.title= `Purchase Form`;

  }

  openPop(targetModal) {
    
    this.modalService.open(targetModal,{
      backdrop: 'static',
      size: 'lg',
      centered: true
    });

  }

  onSubmit(contentNotify) {
    this._service.createNewOrder(this.form.getRawValue()).subscribe(
      res => {
        this.modalService.dismissAll();
        this.ngOnInit();
        this.modalService.open(contentNotify);

      }
    )
  }



  
  

  

}
