import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  DataCommon:string;
  static dt:number=0;  

  constructor() {
    this.DataCommon="hello";
   }
}
