import { Component } from '@angular/core';
import { AllEmployeeService } from '../all-employee.service';

@Component({
  selector: 'app-all-employees',
  templateUrl: './all-employees.component.html',
  styleUrls: ['./all-employees.component.css']
})
export class AllEmployeesComponent {
    employees:any = [];
  constructor(private _employeeService:AllEmployeeService){
    _employeeService.getEmployees().subscribe(
      (data:any)=>{
        this.employees = data;
      },
      (err:any)=>{
        alert('Internal server error');
      }
    )
  }
}
