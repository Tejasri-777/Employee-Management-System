import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

import { Employee } from '../employee';
import { EmployeeService } from '../employee-service';
import {ChangeDetectorRef} from '@angular/core'

@Component({
  selector: 'app-view-emp-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './view-emp-details.html',
  styleUrl: './view-emp-details.css'
})
export class ViewEmpDetails implements OnInit {

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
    private router: Router,
    private cdr:ChangeDetectorRef
  ) {}

  ngOnInit(): void {

    this.id = Number(this.route.snapshot.paramMap.get('id'));

    this.employeeService.getEmployeeById(this.id).subscribe({

  next: (data) => {
  console.log('Employee Data JSON:', JSON.stringify(data));
  console.log('ID:', data.id);
  console.log('Name:', data.fullname);
  console.log('Email:', data.email);
  console.log('Project:', data.project);

  this.employee = data;
  this.cdr.detectChanges();
},
  error: (err) => {
    console.log('ERROR:', err);
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