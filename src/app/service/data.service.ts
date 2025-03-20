import { Injectable } from '@angular/core';
import{ BehaviorSubject, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private dataSubject = new Subject<any>();

  data$ = this.dataSubject.asObservable();

  constructor() {}

  sendData(data:any){
    this.dataSubject.next(data);
  }
}
