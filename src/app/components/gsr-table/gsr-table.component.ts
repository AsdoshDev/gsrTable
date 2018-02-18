import { Component, OnInit,Input } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
@Component({
  selector: 'gsr-table',
  templateUrl: './gsr-table.component.html',
  styleUrls: ['./gsr-table.component.css']
})
export class GsrTableComponent implements OnInit {
  
  @Input() dataObj;
  @Input() columnHeaderInfo; //array of objects
  records:any;
  originalRecords:any;
  showFilter: boolean;
  columns:any;
  constructor(private cd:ChangeDetectorRef) { }

  ngOnInit() {
    this.records = this.originalRecords = this.dataObj.companies[0]["shares"];
    this.columns = this.columnHeaderInfo['columnHeaders'];
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


  changeTable(){
    this.columnHeaderInfo = {'needFilter' : true, 'level' : 3,'columnHeaders' : [
      { attrName: "id", colName: "Account No", filterBy: 'string', searchIcon: 'true', inputType: "text",filterValue:"" },
      { attrName: "name", colName: "Name", filterBy: 'string', inputType: "text",filterValue:"" },
      { attrName: "username", colName: "Username", filterBy: 'string', inputType: "text",filterValue:"" },
    ]};
  }

}
