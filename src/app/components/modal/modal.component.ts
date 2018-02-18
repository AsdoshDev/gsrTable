import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'gsr-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  constructor() { }

  @Input() account:any; 
  @Input() showModal:any;
  @Output() sendValue = new EventEmitter();
 
  ngOnInit() {

  }

 
  generateArray(obj) {

    let bla = Object.keys(obj).map((key) => {

      return {
        key: key, value: obj[key]
      }
    });
    
    return bla;
  }

  onCloseHandled(){
    this.showModal = !this.showModal;
    this.sendValue.emit(this.showModal);  
  }


}
