import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../shared/employee.service';
import { NgForm } from '../../../../node_modules/@angular/forms';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {    
    this.resetForm();
  }
  onSubmit(employeeForm: NgForm)
  {
    this.employeeService.insertEmployee(employeeForm.value);
    this.resetForm(employeeForm);
  }
  resetForm(employeeForm?: NgForm)
  {
    if(employeeForm != null)
    employeeForm.reset();
    
    this.employeeService.selectedEmployee={
      $key : null,
      name : '',
      address : '',
      position : '',
      office : '',
      salary : 0,
    }
  }
}
