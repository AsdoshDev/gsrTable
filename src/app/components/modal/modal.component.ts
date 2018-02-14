import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from 'events';

@Component({
  selector: 'gsr-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  constructor() { }

   @Input() showModal:boolean;
// @Output() childEvent:boolean;
  ngOnInit() {

  }

 

 // childEvent = new EventEmitter<boolean>();
  onCloseHandled(){
    this.showModal = !this.showModal;
    alert("ewf");
   // this.childEvent.emit(this.showModal);
  }


}
