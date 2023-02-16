import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/core/service/api.service';
import { CdkService } from 'src/app/core/service/cdk.service';
import { DataCommunicationService } from 'src/app/core/service/data-communication.service';
import { EmployeeFormComponent } from '../employee-form/employee-form.component';
import { employee } from '../employee.model';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent {
  public employeeData: employee[]
public employeeId!:number
  public data: any
  constructor(private cdkService: CdkService, private apiService: ApiService, public dataCommunicationService: DataCommunicationService, public router: Router) {
    this.employeeData = [];
  }

  ngOnInit(): void {
    this.dataCommunicationService.listData$.subscribe((data: employee) => {
      if (data) {
        this.getEmployeeData()
      }
    })
    this.getEmployeeData();
  }

  public openOverlay() {
    this.cdkService.displayOverlay(EmployeeFormComponent)
  }

  // to delete employee records 

  public deleteEmployee(employeeId: number) {
    alert("are you sure to delete data")
    this.apiService.deleteEmployeeData((employeeId)).subscribe(res => {
      this.getEmployeeData()
    })
  }

  
  public editEmployeeData(id: any) {
    this.router.navigateByUrl('employee/edit/'+ id);
    const b = this.cdkService.displayOverlay(EmployeeFormComponent)
   console.log(this.employeeData);
    b.instance.employeeForm.patchValue(this.employeeData[id-1])
    b.instance.text='Update'
    this.employeeId = b.instance.id
    console.log(this.employeeId);
    
  }
  
  
  
  // to get the employeedata from server
  
  public getEmployeeData() {
    this.apiService.getEmployeeData().subscribe((res) => {
      this.employeeData = res
      // console.log(this.employeeData); 
    })
  }
}
