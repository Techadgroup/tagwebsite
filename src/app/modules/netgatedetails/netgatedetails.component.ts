import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { Netgate } from 'src/app/services/classes/Netgate';
import { MainHttpService } from 'src/app/services/main-http.service';

@Component({
  selector: 'app-netgatedetails',
  templateUrl: './netgatedetails.component.html',
  styleUrls: ['./netgatedetails.component.css']
})
export class NetgatedetailsComponent implements OnInit {
  spec: Netgate;
  devices: Netgate[];
  form: FormGroup;

  constructor(private _service: MainHttpService, private fb: FormBuilder, private modalService: NgbModal, config: NgbModalConfig, private _route: ActivatedRoute) {
    config.backdrop = 'static';
  }

  ngOnInit() {

    const id = this._route.snapshot.params['id'];

    this._service.getDeviceSpec(id).subscribe(
      data => {
        this.spec = data;

        // console.log(data)
      }
    );

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
      agreed: ['', Validators.required],
      status: [''],
      productQty: [''],
      createdAt: [''],
      companyName: [''],
    });


    document.title = `About Device`;
  }

  open(content) {
    this.modalService.open(content);

    document.title = `Purchase Form`;

  }

  onSubmit(contentNotify) {

    // console.log(this.form.getRawValue())
    this._service.createNewOrder(this.form.getRawValue()).subscribe(
      res => {
        this.modalService.dismissAll();
        this.ngOnInit();
        this.modalService.open(contentNotify);

      }
    )
  }


}
