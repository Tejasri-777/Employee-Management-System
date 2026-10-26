import { Component } from '@angular/core';
import { FormsModule ,NgForm} from '@angular/forms';
import { EmployeeService } from '../employee-service';
import { Employee } from '../employee';
import {Router} from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-employee',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './add-employee.html',
  styleUrl: './add-employee.css'
})
export class AddEmployee {

  employee: Employee = {
    fullname: '',
    email: '',
    doj: '',
    project: ''
  };

  isSubmitted: boolean = false;
  constructor(private employeeService: EmployeeService, private router: Router) {}


saveEmployee(form: NgForm): void {
  this.employeeService.addEmployee(this.employee).subscribe({
    next: (data) => {
      console.log(data);
      alert('Employee Added Successfully!');
      this.isSubmitted = true;
      form.resetForm();
    },
    error: (err) => {   
      console.error(err);
      alert('Failed to Add Employee');
    }
  });
}

 
  onSubmit(form: NgForm) {
  this.saveEmployee(form);
}

goHome(){
  this.router.navigate(['/home']);
}

viewEmployees(){
  this.router.navigate(['/employees']);
}

}