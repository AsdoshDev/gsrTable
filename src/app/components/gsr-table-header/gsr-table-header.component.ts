import { Component, OnInit,Input,Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'gsr-table-header',
  templateUrl: './gsr-table-header.component.html',
  styleUrls: ['./gsr-table-header.component.css']
})
export class GsrTableHeaderComponent implements OnInit {
  @Input() showFilter;
  @Input() dataObj;
  @Input() columnHeaderInfo; //array of objects
  @Output() sendFilter = new EventEmitter();
  @Output() sendFilterRecords = new EventEmitter();

  recIndex:any;
  columns:any;
  tableLevel:any;
  records:any;
  originalRecords:any;
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

  clearInputValues(){
    for(let i=0;i<this.columns.length;i++){
      this.columns[i].filterValue = "";
    }
    this.records = this.originalRecords;
    this.sendFilterRecords.emit(this.records);
  }
  filterColumn() {
    this.records = this.originalRecords;
    for(let i=0;i<this.columns.length;i++){
      if(this.columns[i].filterValue !== "" && this.columns[i].filterValue !== "Show All"){
        let filterValue = this.columns[i].filterValue? this.columns[i].filterValue : "";
        this.records = this.records.filter(record => {
          if(record[this.columns[i].attrName]){
            if(this.columns[i].filterBy === "string")
              return (record[this.columns[i].attrName]).toLowerCase().indexOf(filterValue.toLowerCase()) >= 0;
            else if(this.columns[i].filterBy === "number")
              return (record[this.columns[i].attrName]).replace(/[,]/g, "").indexOf(filterValue) >= 0;
            }
            else{
              return -1;
            }
        });
      }
    }

    this.sendFilterRecords.emit(this.records);
      }

  toggleFilterColumn(){
    this.records = this.originalRecords;
    this.showFilter = !this.showFilter;
    this.sendFilter.emit(this.showFilter);
  }

}
