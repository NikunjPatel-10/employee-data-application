import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { ApiService } from 'src/app/core/service/api.service';
import { CdkService } from 'src/app/core/service/cdk.service';
import { DataCommunicationService } from 'src/app/core/service/data-communication.service';
import { employee } from '../employee.model';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss']
})
export class EmployeeFormComponent {
  public text: string
  public employeeForm: FormGroup
  public isSubmitted: boolean;
  public employeeData: employee[];

  /**
   * 
   * @param formBuilder 
   * @param apiService 
   * @param cdkService 
   * @param dataCommunicationService 
   * @param activatedRoute 
   */
  constructor(public formBuilder: FormBuilder, private apiService: ApiService, public cdkService: CdkService, public dataCommunicationService: DataCommunicationService, private activatedRoute: ActivatedRoute) {
    this.isSubmitted = false;
    this.employeeData = [];
    this.text = 'Submit'
    this.employeeForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.pattern(/^[a-zA-Z\s]*$/), Validators.minLength(3)]],
      address: ['', [Validators.required]],
      mobileNo: ['', [Validators.required, Validators.pattern('^[0-9]*$'), Validators.minLength(5)]],
      gender: ['', [Validators.required]],
      salary: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      birthDate: ['', [Validators.required]],
      id:['']
    })

  }
  ngOnInit(): void {

  }

  get employeeFormControl() {
    return this.employeeForm.controls
  }


  // to save employee Data
  public saveEmployeeData() {

    this.isSubmitted = true;
    if (this.employeeForm.valid) {

      if (this.employeeForm.value.id) {
        this.apiService.updateEmployeeData(this.employeeForm.value, this.employeeForm.value.id).subscribe(res => {
          this.dataCommunicationService.listData.next(res);
        })
      }
      else {

          this.apiService.postEmployeeData(this.employeeForm.value).subscribe(res => {
          this.dataCommunicationService.listData.next(res)
        })
      } 
    }
    this.employeeForm.reset()
    this.cdkService.overlayRef.detach()
  }


// for cancel button 

  public cancelForm() {
    this.cdkService.overlayRef.detach()
  }

}
