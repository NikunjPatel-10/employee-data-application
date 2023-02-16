import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { employee } from 'src/app/employee/employee.model';

@Injectable()
export class DataCommunicationService {
public listData : Subject<employee>;
public listData$: Observable<employee>;
  constructor() {
    this.listData = new Subject();
    this.listData$ = this.listData.asObservable()

   }


}
