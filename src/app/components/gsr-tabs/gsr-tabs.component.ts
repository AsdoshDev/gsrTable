import { Component, OnInit,Input } from '@angular/core';
import {TableDataService} from './../../services/table-data.service';
@Component({
  selector: 'gsr-tabs',
  templateUrl: './gsr-tabs.component.html',
  styleUrls: ['./gsr-tabs.component.css']
})
export class GsrTabsComponent implements OnInit {
//@ViewChild('li') el:ElementRef;
@Input() tabs;
columnHeaderInfo:any;
icData:any;
account:any;
constructor(private data: TableDataService,) { }
ngOnInit() {
  //this.tabs.forEach(tab=> tab.isClicked = "disabled");
  this.tabs[0].isClicked = "active";

  this.columnHeaderInfo = this.data.getLevel3Columns();
  this.icData = this.data.getLevel3();
}
ngAfterViewInit() {
  //console.log("this.el.nativeElement.querySelector('li')");
     // console.log(this.el.nativeElement.querySelector('li'));
}
selectTab(tab){
  if(tab.isClicked !== "active"){
  this.tabs.forEach(tab=> tab.isClicked = "");
  tab.isClicked = "active";
  }
}


getLevel(a){
  let levelVar,indexVar;
  if(a.index !== undefined && a.index !== ""){
    indexVar = a.index;
  }
  

  if(a.index === undefined)
      levelVar = (a.level !== 1) ? (a.level-1) : (a.level+1);
  else
      levelVar = 3;

      if(levelVar == 1){
        this.columnHeaderInfo = this.data.getLevel1Columns();
        this.icData = this.data.getLevel1();
      }
      else if(levelVar == 2){
        this.columnHeaderInfo = this.data.getLevel2Columns();
        this.icData = this.data.getLevel3();
      }
      else if(levelVar == 3){
        this.columnHeaderInfo = this.data.getLevel3Columns();
        this.icData = this.data.getLevel3();
      }
      this.columnHeaderInfo.index = indexVar;
      this.columnHeaderInfo.level = levelVar;

}

}


