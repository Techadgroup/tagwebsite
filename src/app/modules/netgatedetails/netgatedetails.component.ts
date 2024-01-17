import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { Netgate } from 'src/app/services/classes/Netgate';
import { MainHttpService } from 'src/app/services/main-http.service';
import { Title, Meta } from '@angular/platform-browser';


@Component({
  selector: 'app-netgatedetails',
  templateUrl: './netgatedetails.component.html',
  styleUrls: ['./netgatedetails.component.css']
})
export class NetgatedetailsComponent implements OnInit {
  spec: Netgate;
  devices: Netgate[];
  form: FormGroup;

  constructor(private _service: MainHttpService, private fb: FormBuilder, private modalService: NgbModal, config: NgbModalConfig, private _route: ActivatedRoute, private metaTagService: Meta, private titleService: Title) {
    config.backdrop = 'static';
  }

  ngOnInit() {

    this.titleService.setTitle(document.title);
    this.metaTagService.addTags([
      { name: 'keywords', content: 'netgate firewalls' },
      // { name: 'robots', content: 'index, follow' },
      {
        name: 'description',
        content:
          'Netgate is an open-source driven secure networking company that provides high-performance and affordable appliance and software-based Firewall, VPN, and routing solutions for the home, office, and cloud. Our pfSense®Plus and TNSR®software products connect and protect homes, businesses, educational institutions, government agencies and service providers all over the world.'
      },
      { name: 'author', content: 'Therence Amoah' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'date', content: '2024-01-16', scheme: 'YYYY-MM-DD' },
      { charset: 'UTF-8' },
    ]);

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
