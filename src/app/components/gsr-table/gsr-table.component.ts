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
  constructor(private cd:ChangeDetectorRef) { }

  ngOnInit() {
    debugger;
    this.columns = this.columnHeaderInfo['columnHeaders'];
    this.recIndex = this.columnHeaderInfo['index'];
    this.tableLevel = this.columnHeaderInfo['level'];
    if(this.tableLevel == 1)
      this.records = this.originalRecords = this.dataObj.details;
      else  if(this.tableLevel == 3)
      this.records = this.originalRecords = this.dataObj.companies[this.recIndex]["records"];
 
  }


 /* FUNCTIONS FOR GSR-TABLE-HEADER STARTS HERE */

  clearInputValues(){
    for(let i=0;i<this.columns.length;i++){
      this.columns[i].filterValue = "";
    }
    this.records = this.originalRecords;
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
    console.log("AFTER");
    console.log(this.records);
    //this.cdr.detectChanges();
  }

  toggleFilterColumn(){
    this.records = this.originalRecords;
    this.showFilter = !this.showFilter;
  //  this.sendValue.emit(this.showFilter);  
  }

   /* FUNCTIONS FOR GSR-TABLE-HEADER ENDS HERE */

  changeTable(level,index){
    // debugger;
    // if(index !== undefined && index !== ""){
    //   this.recIndex = index;
    //   this.records = this.originalRecords = this.dataObj.companies[this.recIndex]["records"];
    // }
    
    // let levelVar;
    // if(index === undefined)
    //     levelVar = (level !== 1) ? (level-1) : (level+1);
    // else
    //     levelVar = 3;
    if(this.showFilter)
       this.showFilter = !this.showFilter;

    let a ={};
    a['level'] = level;
    a['index'] = index;
    this.sendLevel.emit(a);  
        
}
}
