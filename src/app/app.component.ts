import { Component } from '@angular/core';
import { TableDataService } from './services/table-data.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/observable/of';
import { FormsModule } from '@angular/forms';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { ModalComponent } from './components/modal/modal.component';
import { ChangeDetectorRef,Input } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  icon: string;
  icData:any;
  account: any;
  columnHeaderInfo:any;
 

  log(val) { console.log(val); }

  getLevel(a){
    console.log('LEVEL CHANGED');
    console.log(a);
    let levelVar;
    let indexVar;
 

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
  ngOnInit() {

    // this.data.getUsers().subscribe(data => {
    //   console.log(data);
    //   this.users = data;
    //   this.originalUsers = data;
    // }

    this.columnHeaderInfo = this.data.getLevel3Columns();
    this.icData = this.data.getLevel3();
    this.account = this.data.getAccount();
  }

  constructor(private data: TableDataService,private cd: ChangeDetectorRef) {

  }
}
