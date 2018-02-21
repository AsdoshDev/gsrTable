import { Component, OnInit,Input,Output } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'gsr-table',
  templateUrl: './gsr-table.component.html',
  styleUrls: ['./gsr-table.component.css']
})
export class GsrTableComponent implements OnInit {
  @Input() dataObj;
  @Input() columnHeaderInfo; //array of objects
  @Output() sendLevel = new EventEmitter();
  records:any;
  originalRecords:any;
  showFilter: boolean;
  columns:any;
  recIndex:any;
  tableLevel : any;
  constructor() { }

  ngOnInit() {
    this.columns = this.columnHeaderInfo['columnHeaders'];
    this.recIndex = this.columnHeaderInfo['index'];
    this.tableLevel = this.columnHeaderInfo['level'];
    if(this.tableLevel == 1)
      this.records = this.originalRecords = this.dataObj.details;
      else  if(this.tableLevel == 3)
      this.records = this.originalRecords = this.dataObj.companies[this.recIndex]["records"];
 
  }


 /* FUNCTIONS FOR GSR-TABLE-HEADER STARTS HERE */

 
 
   /* FUNCTIONS FOR GSR-TABLE-HEADER ENDS HERE */

  changeTable(level,index){
    if(this.showFilter)
       this.showFilter = !this.showFilter;
    let a ={};
    a['level'] = level;
    a['index'] = index;
    this.sendLevel.emit(a);  
}
}
