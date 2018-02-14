import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

import {TableDataService} from './services/table-data.service';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { SortPipePipe } from './pipes/sort-pipe.pipe';

import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
import {MenuItem} from 'primeng/api';                 //api
import {MenuModule,MenubarModule} from 'primeng/primeng';
import {BreadcrumbModule} from 'primeng/breadcrumb';
import {UserFilterPipe} from './pipes/user-filter.pipe';
// import {TabMenuModule} from 'primeng/tabmenu';

// import {NgForm} from '@angular/forms';
import {FormsModule} from '@angular/forms';
import { ModalComponent } from './components/modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    SortPipePipe,
    UserFilterPipe,
    ModalComponent
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AccordionModule,
    MenuModule,MenubarModule,
    BreadcrumbModule,
    FormsModule
],
  providers: [TableDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
