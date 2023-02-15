import { Component } from '@angular/core';
import { EmployeeFormComponent } from 'src/app/employee/employee-form/employee-form.component';
import { HeaderComponent } from '../header/header.component';
import { CdkService } from '../service/cdk.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  constructor(private cdk:CdkService){

  }
//   hello(){
// this.cdk.displayOverlay(HeaderComponent)
//   }
}
