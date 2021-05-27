import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-serviceitem',
  templateUrl: './serviceitem.component.html',
  styleUrls: ['./serviceitem.component.css']
})
export class ServiceitemComponent implements OnInit {
@Input() service:any;
smallview:boolean=true;
  constructor() { }

  ngOnInit(): void {
  }

  handleDefault(){
    this.smallview = !this.smallview;
  }
}
