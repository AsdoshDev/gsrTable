import { Component, OnInit,Input } from '@angular/core';
	import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'gsr-column-header',
  templateUrl: './column-header.component.html',
  styleUrls: ['./column-header.component.css']
})
export class ColumnHeaderComponent implements OnInit {

  constructor(private cdr:ChangeDetectorRef) { }

  @Input() dataObj;
  @Input() columnHeaderInfo; //array of objects
  @Input() showFilter: boolean;
  records:any[]; //if records:[] is given, for some reason , typescript thinks its tuple and not an array, then any[] is given.
  originalRecords:any[];
  columns:any;

  ngOnInit() {
    this.records = this.originalRecords = this.dataObj.companies[0]["shares"];
    this.columns = this.columnHeaderInfo['columnHeaders'];
  }

  sortColumn(column) {
    if (column.isAscending !== undefined) {
      column.isAscending = !column.isAscending;
  
    }
    else {
      column.isAscending = false;
    }
  
    if (column.filterBy === 'number') {
      this.filterByValue(column);
    }
    else if (column.filterBy === 'string') {
      this.filterByName(column);
    }
  
  
    if (!column.isAscending) {
      column.icon = "arrow-up";
    }
    else {
      column.icon = "arrow-down";
  
    }
  }
  
  filterByValue(column) {
    // sort by value
    if (!column.isAscending) {
      this.records.sort(function (a, b) {
        if (a[column.attrName] && b[column.attrName])
          return (a[column.attrName]).replace(/[,]/g, "") - (b[column.attrName]).replace(/[,]/g, "");
        else if (a[column.attrName])
          return 1;
        else if (b[column.attrName])
          return -1;
      });
    }
    else {
      this.records.sort(function (a, b) {
        if (a[column.attrName] && b[column.attrName])
          return (b[column.attrName]).replace(/[,]/g, "") - (a[column.attrName]).replace(/[,]/g, "");
        else if (b[column.attrName])
          return 1;
        else if (a[column.attrName])
          return -1;
      });
    }
  }
  
  filterByName(column) {
    // sort by name
    if (!column.isAscending) {
      this.records.sort(function (a, b) {
        var nameA = a[column.attrName] ? a[column.attrName].toUpperCase() : ""; // ignore upper and lowercase
        var nameB = b[column.attrName] ? b[column.attrName].toUpperCase() : ""; // ignore upper and lowercase
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
  
        // names must be equal
        return 0;
      });
    }
    else {
      this.records.sort(function (a, b) {
        var nameA = a[column.attrName] ? a[column.attrName].toUpperCase() : ""; // ignore upper and lowercase
        var nameB = b[column.attrName] ? b[column.attrName].toUpperCase() : ""; // ignore upper and lowercase
        if (nameA < nameB) {
          return 1;
        }
        if (nameA > nameB) {
          return -1;
        }
  
        // names must be equal
        return 0;
      });
    }
  }
  
}
