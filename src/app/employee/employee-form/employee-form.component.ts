import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss']
})
export class EmployeeFormComponent {
public employeeForm : FormGroup
public isSubmitted:boolean 
constructor(public formBuilder: FormBuilder){
this.isSubmitted = false;
  this.employeeForm = this.formBuilder.group({
    name:['' ,[Validators.required ,Validators.pattern('[a-zA-Z]*'), Validators.minLength(3)]],
    address:['', [Validators.required]],
    mobileNo :['' , [Validators.required,Validators.pattern('[0-9]*'), Validators.minLength(5)]],
    gender:['' , [Validators.required]],
    salary:['' , [Validators.required , Validators.pattern('[0-9]*')]],
    birthDate:['' , [Validators.required]]
  })

}

get employeeFormControl() {
 return this.employeeForm.controls
}
// to save employee Data
public getEmployeeData(){
  this.isSubmitted = true
 console.log( this.employeeForm.value);
 this.employeeForm.reset()
}


}
