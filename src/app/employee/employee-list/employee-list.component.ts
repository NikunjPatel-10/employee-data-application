import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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
  public employeeData: any
  public employeeId!: number
  public data: any
 public employeeInfo :any
 public isAscendingSort: boolean ;
 public sorting:any


  /**
   * 
   * @param cdkService 
   * @param apiService 
   * @param dataCommunicationService 
   * @param router 
   */
  constructor(private cdkService: CdkService, private apiService: ApiService, public dataCommunicationService: DataCommunicationService, public router: Router, private formb:FormBuilder) {
    this.employeeData = [];
    this.isAscendingSort = false

  }
  
  ngOnInit(): void {
    this.dataCommunicationService.listData$.subscribe((data: employee) => {
      if (data) {
        this.getEmployeeData()
      }
    })
    this.getEmployeeData();
    
    this.dataCommunicationService.employeeInfo$.subscribe((res) =>{
      console.log(res);
      this.employeeInfo = res
    })
  }
  
  public openOverlay() {
    this.cdkService.displayOverlay(EmployeeFormComponent);
  }
  
  
  /**
   * to delete employee records 
   * @param employeeId 
  */
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
 public editEmployeeData(Employee: employee, id: number) {
   this.router.navigate(['employee/edit', id]);
   const overlayRef = this.cdkService.displayOverlay(EmployeeFormComponent)
   console.log(this.employeeData);
   overlayRef.instance.employeeForm.patchValue(Employee)
   overlayRef.instance.text = 'Update'
  }
  
  /**
   * 
   * @param id 
  */
 public getDetails(id: number) {
   this.router.navigate(['employee/details',id])
  }
  
  
  
  // to get the employeedata from server
  
  public getEmployeeData() {
    this.apiService.getEmployeeData().subscribe((res:employee[]) => {
      console.log(res);
      
      this.employeeData = res
    })
  }
  
  public sortData(data:any){
    // console.log(this.employeeData.values.name);
   this.sorting=data.target.value
   console.log( this. sorting );
  }
}
