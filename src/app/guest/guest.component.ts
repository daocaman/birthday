import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GooglesheetService } from '../googlesheet.service';

@Component({
  selector: 'app-guest',
  templateUrl: './guest.component.html',
  styleUrls: ['./guest.component.scss']
})
export class GuestComponent implements OnInit {

  FormChuc: FormGroup = new FormGroup({
     name: new FormControl('',Validators.required),
     loichuc: new FormControl('',Validators.required),
  })

  constructor(
    private _gs: GooglesheetService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  SendGift(){
    if(this.FormChuc.valid){
      this._gs.postLoiChuc(this.FormChuc.value).subscribe(
        (res:any)=>{
          alert("Cảm ơn bạn rất nhiều vì lời chúc đến Tiên cá dễ thương. <3 <3");
          this.router.navigateByUrl("/");
        }
      )
    }
  }
}
