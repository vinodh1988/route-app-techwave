import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http:HttpClient) { }

  getContacts():Observable<object>{
    
    return this.http.get("http://localhost:9090/contacts");
  }

  getDetails(id:number):Observable<object>{
    
    return this.http.get("http://localhost:9090/details/"+id);
  }

  
  
  
}
