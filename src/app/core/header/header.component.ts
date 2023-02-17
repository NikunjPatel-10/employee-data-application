import { Component, OnInit } from '@angular/core';
import { DataCommunicationService } from '../service/data-communication.service';
// import { DataCommunicationService } from './../service/data-communication.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
public filterData!:any

constructor(private dataCommunicationService:DataCommunicationService){
}

ngOnInit(): void {
  
}
onSearch(e:any){
  this.filterData=e.target.value
  this.dataCommunicationService.employeeInfo.next(this.filterData)

}


}
