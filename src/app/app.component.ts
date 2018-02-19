import { Component } from '@angular/core';
import { TableDataService } from './services/table-data.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/observable/of';
import { FormsModule } from '@angular/forms';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { ModalComponent } from './components/modal/modal.component';
import { ChangeDetectorRef } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  icon: string;
  icData:any;
  account: any;
  columnHeaderInfo = {'needFilter' : true, 'level' : 3,'columnHeaders' : [
    { attrName: "id", colName: "Account No", filterBy: 'string', searchIcon: 'true', inputType: "text",filterValue:"" },
    { attrName: "name", colName: "Name", filterBy: 'string', inputType: "text",filterValue:"" },
    { attrName: "username", colName: "Username", filterBy: 'string', inputType: "text",filterValue:"" },
    { attrName: "email", colName: "Email", filterBy: 'string', inputType: "text",filterValue:"" },
    { attrName: "phone", colName: "Phone", filterBy: 'number', inputType: "dropdown", dropdownValues: [123, 345, 999, 567],filterValue:""},
    { attrName: "website", colName: "Website", filterBy: 'string', inputType: "text",filterValue:"" },
    { attrName: "amount", colName: "Amount", filterBy: 'number', inputType: "text",filterValue:"" },
    {attrName:"test2",colName:"Website",filterBy:'string', inputType: "text",filterValue:"" },
    {attrName:"test3",colName:"Website",filterBy:'string', inputType: "text",filterValue:"" },
    {attrName:"test4",colName:"Website",filterBy:'string', inputType: "text",filterValue:"" },
    {attrName:"test5",colName:"Website",filterBy:'string', inputType: "text",filterValue:"" },
  ]};
  log(val) { console.log(val); }


  changeInfo(){
    // alert("werewr");
    // this.columnHeaderInfo = {'needFilter' : true, 'level' : 3,'columnHeaders' : [
    //   { attrName: "cusip", colName: "Account No", filterBy: 'string', searchIcon: 'true', inputType: "text",filterValue:"" },
    //   { attrName: "SELDO", colName: "Name", filterBy: 'string', inputType: "text",filterValue:"" },
    //   { attrName: "IRED", colName: "Username", filterBy: 'string', inputType: "text",filterValue:"" },
    //   { attrName: "ALSK", colName: "Email", filterBy: 'string', inputType: "text",filterValue:"" },
    //   { attrName: "YUT", colName: "Phone", filterBy: 'number', inputType: "dropdown", dropdownValues: [123, 345, 999, 567],filterValue:""},
    //   { attrName: "POEU", colName: "Website", filterBy: 'string', inputType: "text",filterValue:"" },
    //   { attrName: "MNBE", colName: "Amount", filterBy: 'number', inputType: "text",filterValue:"" },
    //   { attrName: "cusip", colName: "Account No", filterBy: 'string', searchIcon: 'true', inputType: "text",filterValue:"" },
    //   { attrName: "SELDO", colName: "Name", filterBy: 'string', inputType: "text",filterValue:"" },
    //   { attrName: "IRED", colName: "Username", filterBy: 'string', inputType: "text",filterValue:"" },
    //   { attrName: "ALSK", colName: "Email", filterBy: 'string', inputType: "text",filterValue:"" },
    //   { attrName: "YUT", colName: "Phone", filterBy: 'number', inputType: "dropdown", dropdownValues: [123, 345, 999, 567],filterValue:""},
    //   { attrName: "POEU", colName: "Website", filterBy: 'string', inputType: "text",filterValue:"" },
    //   { attrName: "MNBE", colName: "Amount", filterBy: 'number', inputType: "text",filterValue:"" },
    // ]};

    // this.icData = this.data.getUsers();
    // this.cd.detectChanges();
  }

  ngOnInit() {

    // this.data.getUsers().subscribe(data => {
    //   console.log(data);
    //   this.users = data;
    //   this.originalUsers = data;
    // }
    this.icData = this.data.getUsers();
    this.account = this.data.getAccount();
    //this.users = this.originalUsers = a.companies[0]["shares"];
    
  }

  constructor(private data: TableDataService,private cd: ChangeDetectorRef) {
    //this.cd.detach();
  }


  // isObject(val) { return typeof val === 'object'; }
  // generateArray(obj) {

  //   let bla = Object.keys(obj).map((key) => {

  //     return {
  //       key: key, value: obj[key]
  //     }
  //   });
  //   console.log(bla);
  //   return bla;
  // }

}
