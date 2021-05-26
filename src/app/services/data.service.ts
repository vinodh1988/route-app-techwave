import { Injectable } from '@angular/core';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
import {content} from '../model/data'
@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  constructor() { }

  getAbout():string{
    return content.about
  }

  getOverview():string[]{
    return content.overview
  }
}
