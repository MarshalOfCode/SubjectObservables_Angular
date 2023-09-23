import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { DataTransferService } from '../data-transfer.service';
import { Subject, count } from 'rxjs';

@Component({
  selector: 'app-second-child',
  templateUrl: './second-child.component.html',
  styleUrls: ['./second-child.component.css']
})


export class SecondChildComponent implements OnInit {


  constructor(private datatransfer: DataTransferService, private cd: ChangeDetectorRef) {

  }

  inputdata: string = '';
  secondInput: any;
  myBehavioursubscription: any = false;
  subjectSubscription:any = false;

  ngOnInit(): void {
    
  }

  subscribeSubject(){

    if(!this.subjectSubscription || this.subjectSubscription.closed){
      this.subjectSubscription = this.datatransfer.subjectObjects.subscribe((res) => {
        this.inputdata = res;
        this.cd.detectChanges();
      });
    }
  }

  unsubscribeSubject(){

    if(this.subjectSubscription && !this.subjectSubscription.closed){
      this.datatransfer.subjectObjects.unsubscribe();
      this.subjectSubscription = false;
      this.datatransfer.subjectObjects = new Subject<any>();
    }

  }

  subscribeBehaviour() {
    this.inputdata = this.myBehavioursubscription ? "Closed" : "Open";
    this.cd.detectChanges();

    if (!this.myBehavioursubscription || this.myBehavioursubscription.closed) {
      this.myBehavioursubscription = this.datatransfer.behaiviourSubject.subscribe((res) => {
        this.inputdata = "Open"
        this.secondInput = res;
      });
    }
  }

  unSubscribe() {
    if (this.myBehavioursubscription && !this.myBehavioursubscription.closed) {
      this.myBehavioursubscription.unsubscribe();
      this.inputdata = "Closed";
      this.cd.detectChanges();
    }
  }

}
