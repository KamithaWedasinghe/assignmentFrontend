import { Injectable } from '@angular/core';
import { Http,Headers, HttpModule } from '@angular/http';
import { map } from 'rxjs/operators';
// import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private http:Http) { }


  user:any;

  authtoken:any;

  getEmployeesDetails(){
    console.log("getEmployeesDetails at auth");
    return this.http.get("http://localhost:3000/user/emp");
  }


  registerUser(user){
    let headers = new Headers();
    headers.append('Content-Type','application/json');

    return this.http.post("http://localhost:3000/user/register",user,{headers:headers}).pipe(map(res=>res.json()));
  }

  loginUser(user){

    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post("http://localhost:3000/user/login",user,{headers:headers}).pipe(map(res=>res.json()));

  }
  storeData(token,userdata){

    localStorage.setItem("tokenid",token);
    localStorage.setItem("user",JSON.stringify(userdata));
    this.authtoken = token;
    this.user= userdata
  }

}
