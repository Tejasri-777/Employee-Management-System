import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Employee } from '../employee';
import { EmployeeService } from '../employee-service';

@Component({
  selector: 'app-update-employee',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './update-employee.html',
  styleUrl: './update-employee.css'
})
export class UpdateEmployee implements OnInit {

  id!: number;

  employee: Employee = {
    fullname: '',
    email: '',
    doj: '',
    project: ''
  };

  constructor(
    private route: ActivatedRoute,
    private employeeService: EmployeeService,
    private router: Router
  ) {}

  ngOnInit(): void {

    this.id = Number(this.route.snapshot.paramMap.get('id'));

    this.employeeService.getEmployeeById(this.id).subscribe({
      next: (data) => {
        this.employee = data;
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  updateEmployee() {

    this.employeeService.updateEmployee(
      this.id,
      this.employee
    ).subscribe({
      next: () => {
        alert('Employee Updated Successfully');
        this.router.navigate(['/employees']);
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  goBack() {
    this.router.navigate(['/employees']);
  }

  goHome() {
    this.router.navigate(['/home']);
  }
}