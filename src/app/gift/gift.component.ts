import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faHeart, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { GooglesheetService } from '../googlesheet.service';

@Component({
  selector: 'app-gift',
  templateUrl: './gift.component.html',
  styleUrls: ['./gift.component.scss']
})
export class GiftComponent implements OnInit {
  faHeart = faHeart;
  faCaretDown= faCaretDown;

  data = []
  constructor(
    private _gs: GooglesheetService,
    private router: Router
  ) { }

  ngOnInit(): void {

    if(this._gs.isLogin){
      this._gs.getLoiChucCount().subscribe(
        (res: any) => {
          //debug
          console.log('\x1b[33m res :\x1b[0m', res);
  
          this.data = res.data;
        }
      )

    }else{
      this.router.navigateByUrl("/");
    }

  }

}
