import { Component } from '@angular/core';
import { CdkService } from '../core/service/cdk.service';
import { EmployeeFormComponent } from './employee-form/employee-form.component';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent {


  constructor(private cdkService: CdkService) {

  }
  
  public openOverlay() {
    this.cdkService.displayOverlay(EmployeeFormComponent)
  }
}
