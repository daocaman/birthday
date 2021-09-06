import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiService } from './shared/services/api.service';

@Injectable({
  providedIn: 'root'
})
export class GooglesheetService {

  isLogin = false;

  constructor(
    private _api: ApiService,
    private http: HttpClient
  ) { }


  getLoiChucCount(){
    return this._api.get('AKfycbyhOsdU65J9_u3rheTA-rY5DYhyjKOoY3shAD7f88mBnNz1Xl-RKCUSz9HjbMH_nr2J','exec')
  }

  postLoiChuc(data:any){
    return this._api.get('AKfycbyhOsdU65J9_u3rheTA-rY5DYhyjKOoY3shAD7f88mBnNz1Xl-RKCUSz9HjbMH_nr2J','exec',{method:'LoiChuc',...data})

  }
}
