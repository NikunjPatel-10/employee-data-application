import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss']
})
export class EmployeeFormComponent {
public employeeForm : FormGroup

constructor(public formBuilder: FormBuilder){

  this.employeeForm = this.formBuilder.group({
    name:['' ,Validators.required],
    address:['', Validators.required],
    mobileNo :['' , Validators.required],
    gender:['' , Validators.required],
    salary:['' , Validators.required],
    birthDate:['' , Validators.required]
  })

}

// to save employee Data
public getEmployeeData(){
 console.log( this.employeeForm.value);
 this.employeeForm.reset()
}
}
