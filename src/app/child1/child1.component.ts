import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CommonService } from '../common.service';
import { MyClass } from '../my-class';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css'],
  
})
export class Child1Component implements OnInit {

  constructor(private _service:CommonService) { }
@Input() ChildInputData:string;
@Output() functionFromChild=new EventEmitter<string>();

  ngOnInit() {
    console.log(this._service.DataCommon + CommonService.dt);
    this._service.DataCommon="hello Again";
    CommonService.dt++;
    MyClass.MyClassData++;
    this.functionFromChild.emit("Hello App root");
    console.log(this._service.DataCommon + CommonService.dt + MyClass.MyClassData +this.ChildInputData);
  }

}
