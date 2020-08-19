import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  constructor(private auth: AuthService) { }

  employeeList: any[];

  ngOnInit() {
    console.log("getEmployeesDetails in component 01");
    this.auth.getEmployeesDetails().subscribe(res => {
      this.employeeList = res.json();
      console.log("getEmployeesDetails in component 02");
      console.log(this.employeeList,"reach");
    });
  }
}