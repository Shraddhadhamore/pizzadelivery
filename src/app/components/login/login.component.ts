import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MyserviceService } from 'src/app/services/myservice.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  resData:any;
  errMsg:any;
  constructor(private myser:MyserviceService,private router:Router) { }
  form =new FormGroup({
    email : new FormControl('',[Validators.required,Validators.email]),
    password : new FormControl('',[Validators.required]),
  })
  get f(){
    return this.form.controls;
  }
  ngOnInit(): void {
  }
  postLogin(){
    let formData=this.form.getRawValue();
    this.myser.adminLogin(formData)
    .subscribe(res=>{
         this.resData=res;
         console.log(this.resData)
         if(this.resData.err==0){
            localStorage.setItem("_token",this.resData.token);
            this.router.navigate(["/products"]);
         }
         if(this.resData.err==1){
            this.errMsg=this.resData.msg;
        }
    })
  }

}
