import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Netgate } from 'src/app/services/classes/Netgate';
import { MainHttpService } from 'src/app/services/main-http.service';

@Component({
  selector: 'app-netgate',
  templateUrl: './netgate.component.html',
  styleUrls: ['./netgate.component.css']
})
export class NetgateComponent implements OnInit {
   devices: Netgate[];
   p: number = 1;
  name: string;


  constructor(private _service: MainHttpService, private _router: Router) { }

  ngOnInit() {

    document.title= `Buy Netgate Device`;

    this._service.getNetGateDevices().subscribe(
      res=>{
            this.devices = res;
      }
    )

  }

    // search by name
    SearchName() {
      if (this.name == "") {
        this.ngOnInit();
      } else {
        this.devices = this.devices.filter(res => {
          return res.name.toLocaleLowerCase().match(this.name.toLocaleLowerCase());
        });
      }
    }

    onClick(id: string){
      this._router.navigate(['/netgate-detail', id]);
    }

   
}
