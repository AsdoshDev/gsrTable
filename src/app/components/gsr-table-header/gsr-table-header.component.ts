import { Component, OnInit,Input,Output } from '@angular/core';
import { EventEmitter } from '@angular/core';


@Component({
  selector: 'gsr-table-header',
  templateUrl: './gsr-table-header.component.html',
  styleUrls: ['./gsr-table-header.component.css']
})
export class GsrTableHeaderComponent implements OnInit {

  constructor() { }

  @Input() dataObj;
  @Input() columnHeaderInfo;
  @Output() sendValue = new EventEmitter();
  ngOnInit() {
    this.records = this.originalRecords = this.dataObj.companies[0]["shares"];
    this.columns = this.columnHeaderInfo['columnHeaders'];
  }


  showFilter: boolean;
  records:any[]; //if records:[] is given, for some reason , typescript thinks its tuple and not an array, then any[] is given.
  originalRecords:any[];
  columns:any;

  clearInputValues(){
    for(let i=0;i<this.columns.length;i++){
      this.columns[i].filterValue = "";
    }
  }
  filterColumn() {
    this.records = this.originalRecords;
    let filterColumn = [];
   // this.cdr.detectChanges();
    for(let i=0;i<this.columns.length;i++){
      if(this.columns[i].filterValue !== "" && this.columns[i].filterValue !== "Show All"){
        this.records = this.records.filter(record => {
          if(record[this.columns[i].attrName]){
          if(this.columns[i].filterBy === "string")
            return (record[this.columns[i].attrName]).toLowerCase().indexOf(this.columns[i].filterValue.toLowerCase()) >= 0;
          else if(this.columns[i].filterBy === "number")
            return (record[this.columns[i].attrName]).replace(/[,]/g, "").indexOf(this.columns[i].filterValue) >= 0;
          }
          else{
            return -1;
          }
        });
      }
    }
    console.log("AFTER");
    console.log(this.records);
    //this.cdr.detectChanges();
  }

  toggleFilterColumn(){
    this.records = this.originalRecords;
    this.showFilter = !this.showFilter;
    this.sendValue.emit(this.showFilter);  
  }

}
