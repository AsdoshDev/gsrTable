import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

import {TableDataService} from './services/table-data.service';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

// import {NgForm} from '@angular/forms';
import {FormsModule} from '@angular/forms';
import { ModalComponent } from './components/modal/modal.component';
import { GsrRowComponent } from './components/gsr-row/gsr-row.component';
import { ColumnHeaderComponent } from './components/column-header/column-header.component';
import { GsrTableComponent } from './components/gsr-table/gsr-table.component';
import { GsrTableHeaderComponent } from './components/gsr-table-header/gsr-table-header.component';

@NgModule({
  declarations: [
    AppComponent,
    ModalComponent,
    GsrRowComponent,
    ColumnHeaderComponent,
    GsrTableComponent,
    GsrTableHeaderComponent
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
],
  providers: [TableDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
