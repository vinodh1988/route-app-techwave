import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
 about:string="";
 overview:string[]=[]
  constructor(public ds:DataService) {
       this.about = ds.getAbout();
       this.overview =ds.getOverview();
   }

  ngOnInit(): void {
     
  }

}
