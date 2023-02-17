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


  /**
   * 
   * @param cdkService 
   * @param apiService 
   * @param dataCommunicationService 
   * @param router 
   */
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

  
  /**
   * 
   * @param Employee 
   */
  public editEmployeeData(Employee:employee , id:number) {
    this.router.navigate(['employee/edit', id]);
    const overlayRef  = this.cdkService.displayOverlay(EmployeeFormComponent)
    console.log(this.employeeData);
    overlayRef.instance.employeeForm.patchValue(Employee)
    overlayRef.instance.text='Update'
  }
  
  
  
  // to get the employeedata from server
  
  public getEmployeeData() {
    this.apiService.getEmployeeData().subscribe((res) => {
      this.employeeData = res
      // console.log(this.employeeData); 
    })
  }
}
