import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  constructor() { }

  loader: BehaviorSubject<any> = new BehaviorSubject(false);

  setLoader(data: any){
    this.loader.next(data);
  }
}
