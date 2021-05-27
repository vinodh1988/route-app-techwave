import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
id:any;
record:any;
 
  constructor(private route:ActivatedRoute,private cs:ContactService) {
      route.params.subscribe(params=>
           this.id=params['id']);
           this.cs.getDetails(this.id).subscribe(
             (data)=>this.record = data,
             ()=>this.record={}
           )
       }


  ngOnInit(): void {
  }

}
