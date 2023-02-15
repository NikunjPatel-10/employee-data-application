import { Component } from '@angular/core';
import { ApiService } from 'src/app/core/service/api.service';
import { CdkService } from 'src/app/core/service/cdk.service';
import { EmployeeFormComponent } from '../employee-form/employee-form.component';
import { employee } from '../employee.model';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent {
  public employeeData: employee[]
  constructor(private cdkService: CdkService, private apiService: ApiService) {
    this.employeeData = []
  }

  ngOnInit(): void {
    this.getEmployeeData();
  }

  public openOverlay() {
    this.cdkService.displayOverlay(EmployeeFormComponent)
  }

  // to get the employeedata 
  
  public getEmployeeData() {
    this.apiService.getEmployeeData().subscribe((res) => {
      this.employeeData = res
      console.log(this.employeeData); 
    })
  }
}
