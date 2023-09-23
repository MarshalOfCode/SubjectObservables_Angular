import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataTransferService {

  constructor() { }

  public subjectObjects = new Subject<any>();
  public behaiviourSubject = new BehaviorSubject<any>(null);

  sendData(data:any){
    this.subjectObjects.next(data);
  }

  setBehaviourSubject(data:any){
    this.behaiviourSubject.next(data);
  }

  getData(){
    return this.subjectObjects.asObservable();
  }

}
