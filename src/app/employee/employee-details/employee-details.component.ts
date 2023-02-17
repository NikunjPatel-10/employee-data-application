import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ApiService } from 'src/app/core/service/api.service';
import { CdkService } from 'src/app/core/service/cdk.service';
import { DataCommunicationService } from 'src/app/core/service/data-communication.service';
import { EmployeeFormComponent } from '../employee-form/employee-form.component';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss']
})
export class EmployeeDetailsComponent implements OnInit {
  public id!: number
  public employeeInfo: any

  /**
   * 
   * @param apiService 
   * @param actRoute 
   */
  constructor(public apiService: ApiService, private actRoute: ActivatedRoute) {
  }
  ngOnInit(): void {
    this.actRoute.params.subscribe((params: Params) => {
      this.id = params['id']
    })
    this.getEmployeeDataById()
  }

  getEmployeeDataById() {
    this.apiService.getEmployeeDataById(this.id).subscribe(res => {
      this.employeeInfo = res;
      console.log(this.employeeInfo); 
    })
  }

}
