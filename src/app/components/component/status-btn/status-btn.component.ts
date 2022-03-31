import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-status-btn',
  templateUrl: './status-btn.component.html',
  styleUrls: ['./status-btn.component.css']
})
export class StatusBtnComponent implements OnInit {

  @Input() status:number;

  // thong bao status moi ve parent
  @Output() changeStatus:EventEmitter<number>;

  constructor() {
    this.status=0;
    this.changeStatus = new EventEmitter()
   }

  ngOnInit(): void {
  }

  onChangeStatus(status:number){
    this.changeStatus.emit(status)



      
  }



}
