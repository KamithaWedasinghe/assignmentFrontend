import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  name: String;
  username: String;
  email: String;
  password: String;


  constructor(private auth: AuthService,
    private router: Router

  ) { }

  ngOnInit() {
  }


  registerData() {

    const user = {
      name: this.name,
      username: this.username,
      email: this.email,
      password: this.password
    };

    this.auth.registerUser(user).subscribe(res => {
      if (res.state) {
        this.router.navigate(['/login']);
      } else {
        this.router.navigate(['/register']);
      }
    });
  }
}
