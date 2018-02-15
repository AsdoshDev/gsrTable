import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { TableDataService } from '../../services/table-data.service';
@Component({
  selector: 'gsr-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
account = {};
  constructor(private data:TableDataService ) { }

   @Input() showModal:any;
  @Output() sendValue = new EventEmitter();
 
  ngOnInit() {
    this.account = this.data.getAccount();
  }

 
  generateArray(obj) {

    let bla = Object.keys(obj).map((key) => {

      return {
        key: key, value: obj[key]
      }
    });
    console.log(bla);
    return bla;
  }

  onCloseHandled(){
    this.showModal = !this.showModal;
    this.sendValue.emit(this.showModal);  
  }


}
