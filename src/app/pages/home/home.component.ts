import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
services:any;
  constructor(private ps:ProductsService) { 
      this.ps.getServices().subscribe(
        (data)=>this.services=data,
        ()=>this.services=[]
      )
  }

  ngOnInit(): void {
  }

}
