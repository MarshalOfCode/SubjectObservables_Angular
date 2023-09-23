import { Component } from '@angular/core';
import { DataTransferService } from '../data-transfer.service';

@Component({
  selector: 'app-first-child',
  templateUrl: './first-child.component.html',
  styleUrls: ['./first-child.component.css']
})


export class FirstChildComponent {

  
  constructor(private datatransfer:DataTransferService) {
    
  }

  count:number=0;
  inputText:any;

  submit(){
    this.datatransfer.subjectObjects.next(this.inputText);
  }

  setBehaviour(){
    this.datatransfer.behaiviourSubject.next(this.count);
    this.count++;
  }

  

}
