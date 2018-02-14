import { Component } from '@angular/core';
import { TableDataService } from './services/table-data.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/observable/of';

//import {NgForm} from '@angular/forms';

import { FormsModule } from '@angular/forms';


import { BreadcrumbModule } from 'primeng/breadcrumb';
import { UserFilterPipe } from './pipes/user-filter.pipe';
import { ModalComponent } from './components/modal/modal.component';
//import {TabMenuModule} from 'primeng/tabmenu';




// import { PipeTransform, Pipe } from '@angular/core';

// @Pipe({name: 'keys'})
// export class KeysPipe implements PipeTransform {
//   transform(value, args:string[]) : any {
//     let keys = [];
//     for (let key in value) {
//       keys.push(key);
//     }
//     return keys;
//   }
// }


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  users: any;
  qtd = [];
  icon: string;
  filteredData: any;
  icData:any;
  originalUsers: any;
  showFilter: boolean;
  showModal: boolean = false;
  openModal() {
    this.showModal = !this.showModal;
  }

  onCloseHandled() {
    this.showModal = !this.showModal;
  }
  columns = [
    // { attrName: "", colName: "", accordion: 'false', inputType: "text", },
    { attrName: "id", colName: "Account No", sortBy: 'string', searchIcon: 'true', inputType: "date" },
    { attrName: "name", colName: "Name", sortBy: 'string', inputType: "text" },
    { attrName: "username", colName: "Username", sortBy: 'string', inputType: "text" },
    { attrName: "email", colName: "Email", sortBy: 'string', inputType: "text" },
    { attrName: "phone", colName: "Phone", sortBy: 'number', inputType: "dropdown", dropdownValues: [123, 345, 999, 567] },
    { attrName: "website", colName: "Website", sortBy: 'string', inputType: "text" },
    { attrName: "amount", colName: "Amount", sortBy: 'number', inputType: "text" },
    // {attrName:"test2",colName:"Website",sortBy:'string'},
    // {attrName:"test3",colName:"Website",sortBy:'string'},
    // {attrName:"test4",colName:"Website",sortBy:'string'},
    // {attrName:"test5",colName:"Website",sortBy:'string'},
  ]

  //[{attrName:["sn"],colName:"S No"},{attrName:["add ress"],colName :"Address"}]

  // columns = {sn:'S No',name : 'Name'}

  log(val) { console.log(val); }



  ngOnInit() {

    // this.data.getUsers().subscribe(data => {
    //   console.log(data);
    //   this.users = data;
    //   this.originalUsers = data;
    // }
    let a = this.data.getUsers();
    this.icData = a;
debugger;
    this.users = this.originalUsers = a.companies[0]["shares"];
    
  }

  constructor(private data: TableDataService) {
    this.users = [];
  }

  toggleFilterColumn(){
    this.users = this.originalUsers;
  this.showFilter = !this.showFilter;
}

  filterColumn(column, val) {
    //if (!val || column.filterInput === "dropdown")
      this.users = this.originalUsers;

    if (column.sortBy === "string")
      this.users = this.users.filter(d => {
        if(d[column.attrName])
          return (d[column.attrName]).toLowerCase().indexOf(val.toLowerCase()) >= 0;
        else
          return -1;
      });
    if (column.sortBy === "number")
      this.users = this.users.filter(d => {
        if(d[column.attrName])
          return  (d[column.attrName]).replace(/[,]/g, "").indexOf(val) >= 0;
        else
          return -1;
      });
  }

  hello(column) {
    if (column.isAscending !== undefined) {
      column.isAscending = !column.isAscending;

    }
    else {
      column.isAscending = false;
    }

    if (column.sortBy === 'number') {
      this.sortByValue(column);
    }
    else if (column.sortBy === 'string') {
      this.sortByName(column);
    }


    if (!column.isAscending) {
      column.icon = "arrow-up";
    }
    else {
      column.icon = "arrow-down";

    }
  }




  sortByValue(column) {
    // sort by value
    if (!column.isAscending) {
      this.users.sort(function (a, b) {
        if (a[column.attrName] && b[column.attrName])
          return (a[column.attrName]).replace(/[,]/g, "") - (b[column.attrName]).replace(/[,]/g, "");
        else if (a[column.attrName])
          return 1;
        else if (b[column.attrName])
          return -1;
      });
    }
    else {
      this.users.sort(function (a, b) {
        if (a[column.attrName] && b[column.attrName])
          return (b[column.attrName]).replace(/[,]/g, "") - (a[column.attrName]).replace(/[,]/g, "");
        else if (b[column.attrName])
          return 1;
        else if (a[column.attrName])
          return -1;
      });
    }
  }

  sortByName(column) {
    // sort by name
    if (!column.isAscending) {
      this.users.sort(function (a, b) {
        var nameA = a[column.attrName].toUpperCase(); // ignore upper and lowercase
        var nameB = b[column.attrName].toUpperCase(); // ignore upper and lowercase
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
      this.users.sort(function (a, b) {
        var nameA = a[column.attrName].toUpperCase(); // ignore upper and lowercase
        var nameB = b[column.attrName].toUpperCase(); // ignore upper and lowercase
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

  isObject(val) { return typeof val === 'object'; }
  generateArray(obj) {

    let bla = Object.keys(obj).map((key) => {

      return {
        key: key, value: obj[key]
      }
    });
    console.log(bla);
    return bla;
  }

}
