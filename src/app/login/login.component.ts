import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private auth: AuthService,
    private route: Router) { }

  email: String;
  password: String;

  ngOnInit(): void {
  }


  login() {

    const user = {
      email: this.email,
      password: this.password
    };

    this.auth.loginUser(user).subscribe(res => {
      if (res.state) {
        this.auth.storeData(res.token, res.user);
        this.route.navigate(['/employees']);
      alert("succesfully");
      } else {
        this.route.navigate(['/login']);
      }

    });

  }
}
