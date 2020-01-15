import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { MyClass } from '../my-class';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {

  constructor(private _service:CommonService) { }

  ngOnInit() {
    console.log(this._service.DataCommon+ CommonService.dt+ MyClass.MyClassData);
  }

}
