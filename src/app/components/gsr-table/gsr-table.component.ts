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
  constructor(private cd:ChangeDetectorRef) { }

  ngOnInit() {
     this.records =  this.dataObj.companies[0]["shares"];
  }

  changeTable(){
    this.columnHeaderInfo = {'needFilter' : true, 'level' : 3,'columnHeaders' : [
      { attrName: "id", colName: "Account No", filterBy: 'string', searchIcon: 'true', inputType: "text",filterValue:"" },
      { attrName: "name", colName: "Name", filterBy: 'string', inputType: "text",filterValue:"" },
      { attrName: "username", colName: "Username", filterBy: 'string', inputType: "text",filterValue:"" },
    ]};
    //this.cd.detach();
    //this.cd.detectChanges();
  }

}
