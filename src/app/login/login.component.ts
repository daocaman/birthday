import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {faHeart} from '@fortawesome/free-solid-svg-icons';
import { GooglesheetService } from '../googlesheet.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup = new FormGroup({
     name: new FormControl('' ,Validators.required),
     pass: new FormControl('' ,Validators.required),
  })

  constructor(
    private router: Router,
    private _gs: GooglesheetService
  ) { }

  ngOnInit(): void {
  }

  OpenGift(){
    if(this.loginForm.valid){
      let value = this.loginForm.value;

      if(value.name=="Snowy meo" && value.pass == "07102021"){
        this._gs.isLogin = true;
        this.router.navigateByUrl("/gift")
      }else{
        alert("Nghiêm cấm xem trộm quà nha! Lêu lêu");
      }
    }
  }
}
