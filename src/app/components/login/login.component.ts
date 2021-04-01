import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/service/notification.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PasswordValidatorService } from 'src/app/service/password-validator.service'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email: any;
  Password: any;
  form !: FormGroup
  hide = true;
  
  
  constructor(private router: Router, private notifyService: NotificationService, private passwordValidator: PasswordValidatorService, private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      emailAddress: [null, Validators.compose([
        Validators.required,
        Validators.email
      ])],
      password: [null, Validators.compose([
        Validators.required,
        Validators.minLength(8),
        passwordValidator.patternValidator(/\d/, { hasNumber: true }),
        passwordValidator.patternValidator(/[A-Z]/, { hasCapitalCase: true }),
        passwordValidator.patternValidator(/[a-z]/, { hasSmallCase: true }),
        passwordValidator.patternValidator(/[!@#$%^&*]/, { hasSpecialCharacters: true })

      ])
      ]
    })
  }
  ngOnInit(): void { }
  login() {
    localStorage.setItem('username',this.email)
    if (this.email == "" || this.email == undefined) {
      this.notifyService.showInfo("Please Enter EmailAddress");
      return
    }
    if (this.Password == "" || this.Password == undefined) {
      this.notifyService.showInfo("Please Enter Password");
      return
    }

    if (this.email == "phani@gmail.com" && this.Password == "Test@phani123" ||
      this.email == "venkat@gmail.com" && this.Password == "Test@venkat456" ||
      this.email == "prabhu@gmail.com" && this.Password == "Test@prabhu789"||this.email == "s" && this.Password == "m" ) {
      this.notifyService.showSuccess("Login Success");
      this.router.navigateByUrl("/master-wraper");
      console.log(this.email,this.Password)
    }
    else {
      this.notifyService.showError("Login Failed");
      console.warn("login Failed");
      return
    }
  }
  
}

