import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  secretKey: string = "secret-key-company";

  constructor() { }

  encryptData(data: any){
    
    let jsonString = JSON.stringify(data);

    let encryptedRes = CryptoJS.AES.encrypt(jsonString, this.secretKey).toString();

    return encryptedRes;
  }

  decryptData(data: string){

    let decryptedData = CryptoJS.AES.decrypt(data, this.secretKey).toString(CryptoJS.enc.Utf8);

    decryptedData = JSON.parse(decryptedData);

    return decryptedData;

  }
}
