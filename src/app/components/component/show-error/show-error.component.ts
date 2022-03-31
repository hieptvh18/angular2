import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-error',
  templateUrl: './show-error.component.html',
  styleUrls: ['./show-error.component.css']
})
export class ShowErrorComponent implements OnInit {

  // define input co the nhan dc value tu parent, neu k truyen thi nhan bien cua input chinh ten do.
  // Neu truyen thi co the gans ten moi
  @Input() formField:any;
  @Input() key:string;
  // gan lai value cua input truyen sang = var khac
  // @Input('message') mes:string;

  constructor() { 
    this.key = '';
    // this.mes = '';
  }

  ngOnInit(): void {


  }

}
